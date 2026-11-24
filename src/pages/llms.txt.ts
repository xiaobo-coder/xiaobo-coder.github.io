import type { APIRoute } from 'astro';
import { papers, posts, profile } from '../utils/site';
export const GET: APIRoute = ({ site }) => {
  const base = new URL(import.meta.env.BASE_URL.replace(/\/?$/, '/'), site).href;
  const L = [`# ${profile.name}`, '', `> ${profile.headline} ${profile.affiliation}.`, '', profile.bio, '', '## About', ...profile.about.map((t) => `- ${t}`), `- Contact for collaboration: ${profile.contact.display}`, '',
    '## Profiles', ...Object.entries(profile.links).map(([k, v]) => `- [${k}](${v})`), '',
    `## Papers (${papers.length}, all on arXiv)`, ...papers.map((p) => `- [${p.title}](https://arxiv.org/abs/${p.arxiv}) — ${p.authors.join(', ')} (${p.date.slice(0, 4)}). ${p.summary}`), '',
    `- Machine-readable: [papers.json](${base}papers.json), [papers.bib](${base}papers.bib)`, '',
    '## Projects', ...profile.projects.map((j) => `- [${j.name}](${j.url}): ${j.description}`), '',
    `## Blog (${posts.length} posts)`, ...posts.map((p) => `- [${p.title}](${base}blog/${p.slug}/) (${p.date})${p.description ? ': ' + p.description : ''}`), `- [RSS](${base}rss.xml)`, ''];
  return new Response(L.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
