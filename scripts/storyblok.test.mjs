import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const source = await readFile(new URL('../src/services/storyblok.js', import.meta.url), 'utf8');
const slug = 'blog/cybersecurity-in-saudi-arabia-business-risks-in-2026';
const oldStory = { slug: slug.slice(5), full_slug: slug, content: { author: 'Keshav' } };
const newStory = { ...oldStory, content: { author: 'Divya' } };
let sequence = 0;

async function service(t, responder, { prerender = false, draft = false } = {}) {
  t.mock.method(console, 'error', () => {});
  const calls = [];
  const previousFetch = globalThis.fetch;
  const previousWindow = globalThis.window;
  globalThis.window = { __PRERENDER__: prerender };
  globalThis.fetch = async url => { calls.push(String(url)); return responder(String(url)); };
  t.after(() => { globalThis.fetch = previousFetch; globalThis.window = previousWindow; });
  const code = draft ? source.replace("const VERSION = import.meta.env?.VITE_STORYBLOK_CONTENT_VERSION || 'published'", "const VERSION = 'draft'") : source;
  return { api: await import('data:text/javascript;base64,' + Buffer.from(code + '\n//' + sequence++).toString('base64')), calls };
}

test('published updates take precedence over the deployed snapshot for articles and listings', async t => {
  const { api, calls } = await service(t, url => {
    assert.ok(url.startsWith('https://api.storyblok.com/'));
    assert.equal(new URL(url).searchParams.get('version'), 'published');
    return Response.json(url.includes('/stories/') ? { story: newStory } : { stories: [newStory] }, { headers: { total: '1' } });
  });
  assert.equal((await api.getStoryBySlug('/' + slug)).content.author, 'Divya');
  assert.equal((await api.getStories({ startsWith: 'blog/' })).stories[0].content.author, 'Divya');
  assert.equal(calls.length, 2);
});

test('a CMS outage falls back to the published snapshot', async t => {
  const { api } = await service(t, url => url.startsWith('/') ? Response.json([oldStory]) : new Response('', { status: 503 }));
  assert.equal((await api.getStoryBySlug(slug)).content.author, 'Keshav');
  assert.equal((await api.getStories()).total, 1);
});

test('a live 404 never resurrects an unpublished article from the snapshot', async t => {
  const { api, calls } = await service(t, () => new Response('', { status: 404 }));
  assert.equal(await api.getStoryBySlug(slug), null);
  assert.equal(calls.length, 1);
});

test('prerender uses only the local snapshot and respects listing pagination', async t => {
  const otherStory = { ...oldStory, full_slug: 'blog/other', slug: 'other' };
  const { api, calls } = await service(t, url => {
    assert.equal(url, '/content/blog.json');
    return Response.json([oldStory, otherStory]);
  }, { prerender: true });
  assert.deepEqual(await api.getStoryBySlug(slug), oldStory);
  assert.deepEqual(await api.getStories({ startsWith: 'blog/', perPage: 1, page: 2 }), { stories: [otherStory], total: 2 });
  assert.equal(calls.length, 1);
});

test('draft requests never fall back to published content', async t => {
  const { api, calls } = await service(t, url => {
    assert.equal(new URL(url).searchParams.get('version'), 'draft');
    return new Response('', { status: 503 });
  }, { draft: true });
  assert.equal(await api.getStoryBySlug(slug), null);
  assert.deepEqual(await api.getStories(), { stories: [], total: 0 });
  assert.equal(calls.length, 2);
});

test('invalid snapshot responses fail safely', async t => {
  const { api } = await service(t, () => Response.json({ error: 'not a snapshot' }), { prerender: true });
  assert.equal(await api.getStoryBySlug(slug), null);
  assert.deepEqual(await api.getStories(), { stories: [], total: 0 });
});
