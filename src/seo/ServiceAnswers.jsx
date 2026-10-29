import { Link, useLocation } from 'react-router-dom';
import site from './site.json';
export default function ServiceAnswers() {
  const { pathname } = useLocation();
  const route = site.routes.find(item => item.path === pathname && item.type === 'service');
  if (!route) return null;
  return <section className="mx-auto max-w-6xl px-6 py-12" aria-label="Service questions"><h2 className="text-2xl font-bold mb-6">Questions about {route.title}</h2><details className="mb-4"><summary>What does {route.title.toLowerCase()} cover?</summary><p className="py-3">{route.description}</p></details><details className="mb-4"><summary>What information should we share before discussing scope?</summary><p className="py-3">Tell us about your business, operating locations, existing finance systems and the work you need support with. Share sensitive records only through a channel agreed with the team.</p></details><details><summary>How do we confirm fees and timing?</summary><p className="py-3"><Link to="/contact">Contact BNC Global</Link> to discuss your requirements and agree on scope, deliverables, fees and timing before an engagement starts.</p></details><nav className="mt-6" aria-label="Related services"><Link to="/accounts-outsourcing">Accounting outsourcing</Link> · <Link to="/virtual-cfo">Virtual CFO</Link> · <Link to="/bnc-global-services">All services</Link></nav></section>;
}
