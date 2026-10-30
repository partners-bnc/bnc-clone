import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { loadEnv } from 'vite';
const env = {...loadEnv('production', process.cwd(), ''), ...process.env};
const path = 'src/seo/site.json';
let site;
try { site = JSON.parse(await readFile(path, 'utf8')); } catch { site = {name:'BNC Data Privacy',origin:'https://www.bncdataprivacy.com',logo:'/assets/logo-mark.svg',redirects:{'/blog/categories/hipaa-compliance-1':'/blog/categories/hipaa-compliance'},privateRoutes:[]}; }
if (env.VITE_SITE_URL) site.origin = new URL(env.VITE_SITE_URL).origin;
if (site.name === 'BNC Data Privacy') {
  const { sitePages, blogPosts, blogCategories } = await import('../src/data/content.ts');
  site.routes = [
    ...sitePages.map(p => ({path:p.path,title:p.title,description:p.description,type:['service','compliance'].includes(p.family)?'service':'page'})),
    ...blogPosts.map(p => ({path:p.path,title:p.title,description:p.excerpt,type:'post',published:p.published,author:p.author,image:p.image})),
    ...blogCategories.map(p => ({path:p.path,title:p.name,description:p.description,type:'page'})),
  ];
}
if (site.name === 'BNC Global') {
  const source = await readFile('src/services/storyblok.js','utf8');
  const token = env.VITE_STORYBLOK_DELIVERY_API_TOKEN || env.VITE_STORYBLOK_ACCESS_TOKEN || source.match(/\|\| '([^']+)'/)[1];
  const stories=[];
  const cacheVersion = String(Date.now());
  for (let page=1; ; page++) {
    const params=new URLSearchParams({token,version:'published',starts_with:'blog/',per_page:'100',page:String(page),cv:cacheVersion});
    const response=await fetch('https://api.storyblok.com/v2/cdn/stories?'+params,{signal:AbortSignal.timeout(60000)});
    if (!response.ok) throw new Error('Published blog snapshot failed: HTTP '+response.status);
    const data=await response.json();stories.push(...data.stories.filter(s=>!s.is_folder && s.content?.component==='blog_post'));
    if (data.stories.length<100) break;
  }
  await mkdir('public/content',{recursive:true});await writeFile('public/content/blog.json',JSON.stringify(stories));
  site.routes=site.routes.filter(p=>p.type!=='post');
  for (const s of stories) site.routes.push({path:'/blog/'+s.slug,title:s.content.title||s.name,description:s.content.meta_desc||s.content.excerpt||s.name,type:'post',author:typeof s.content.author==='string'?s.content.author:undefined,published:s.content.date||s.first_published_at,modified:s.published_at,image:typeof s.content.cover_image_url==='string'?s.content.cover_image_url:s.content.cover_image_url?.filename});
}
if (site.name === 'BNC LEG Partners') {
  const {services}=await import('../src/data/services.js');
  site.routes=site.routes.filter(p=>p.type!=='service');
  for (const s of services) {
    for (const country of ['global',...s.country.filter(c=>c!=='other')]) {
      const location = country==='global'?'':country==='india'?' in India':' in Saudi Arabia';
      site.routes.push({path:`/services/${country}/${s.id}`,title:s.title+location,description:s.summary,type:'service'});
    }
    site.redirects['/services/'+s.id]='/services/global/'+s.id;
    if(s.country.includes('other'))site.redirects['/services/other/'+s.id]='/services/global/'+s.id;
  }
}
for (const route of site.routes) { route.description = route.description.length > 210 ? route.description.slice(0,207).replace(/\s+\S*$/, '') + '…' : route.description; }
await mkdir('src/seo',{recursive:true});await writeFile(path,JSON.stringify(site,null,2)+'\n');
// Route policy is generated from the same catalogue as the sitemap and HTML snapshots.
const vercel={buildCommand:'npm run build',outputDirectory:'dist',cleanUrls:true,redirects:Object.entries(site.redirects).map(([source,destination])=>({source,destination,permanent:true}))};
if(site.privateRoutes.length) {
  vercel.rewrites=site.privateRoutes.map(source=>({source:source+'/:path*',destination:'/app.html'}));
  vercel.headers=site.privateRoutes.map(source=>({source:source+'/:path*',headers:[{key:'X-Robots-Tag',value:'noindex, follow'}]}));
}
await writeFile('vercel.json',JSON.stringify(vercel,null,2)+'\n');
console.log(`Prepared ${site.routes.length} public routes for ${site.name}`);
