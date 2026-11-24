import type { APIRoute } from 'astro';
import { posts, profile } from '../utils/site';
const esc = (s: string) => s.replace(/[<>&'"]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' })[c]!);
export const GET: APIRoute = ({ site }) => {
  const base = new URL(import.meta.env.BASE_URL.replace(/\/?$/, '/'), site).href;
  const items = posts.map((p) => `<item><title>${esc(p.title)}</title><link>${base}blog/${p.slug}/</link><guid>${base}blog/${p.slug}/</guid><pubDate>${new Date(p.date + 'T00:00:00Z').toUTCString()}</pubDate><description>${esc(p.description)}</description></item>`).join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>${esc(profile.name)} — blog</title><link>${base}</link><description>${esc(profile.headline)}</description>${items}</channel></rss>\n`, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
};
