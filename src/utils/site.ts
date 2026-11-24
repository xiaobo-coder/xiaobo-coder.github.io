import papersJson from '../../data/papers.json';
import profileJson from '../../data/profile.json';

export interface Paper { arxiv: string; title: string; authors: string[]; date: string; category: string; summary: string; topic: string; code: string; first_author: boolean }
export interface Post { slug: string; title: string; date: string; description: string; tags: string[]; draft?: boolean; Content: any }

export const papers = papersJson as Paper[];
export const profile = profileJson as {
  name: string; affiliation: string; headline: string; bio: string; links: Record<string, string>;
  projects: { name: string; url: string; repo: string; description: string }[];
  about: string[]; education: { school: string; degree: string }[]; contact: { display: string };
};

/** Blog posts: every Markdown file in src/posts/ with `draft: true` left out of the build. */
const modules = import.meta.glob<any>('../posts/*.md', { eager: true });
export const posts: Post[] = Object.entries(modules)
  .map(([path, m]) => ({
    slug: path.split('/').pop()!.replace(/\.md$/, ''),
    title: m.frontmatter.title, date: String(m.frontmatter.date).slice(0, 10), description: m.frontmatter.description ?? '',
    tags: m.frontmatter.tags ?? [], draft: m.frontmatter.draft === true, Content: m.Content,
  }))
  .filter((p) => !p.draft)
  .sort((a, b) => b.date.localeCompare(a.date));

export function url(path = ''): string {
  const b = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${b}/${path.replace(/^\//, '')}`;
}
export const fmtDate = (d: string) => new Date(d + 'T00:00:00Z').toLocaleDateString('en', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' });
export const bibtex = (p: Paper) => {
  const key = p.authors[0].split(' ').pop()!.toLowerCase() + p.date.slice(0, 4) + p.title.split(/[^A-Za-z]/)[0].toLowerCase();
  return `@misc{${key},\n  title         = {{${p.title}}},\n  author        = {${p.authors.join(' and ')}},\n  year          = {${p.date.slice(0, 4)}},\n  eprint        = {${p.arxiv}},\n  archivePrefix = {arXiv},\n  primaryClass  = {${p.category}},\n  url           = {https://arxiv.org/abs/${p.arxiv}}\n}`;
};
