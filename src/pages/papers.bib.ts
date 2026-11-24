import type { APIRoute } from 'astro';
import { papers, bibtex } from '../utils/site';
export const GET: APIRoute = () => new Response(papers.map(bibtex).join('\n\n') + '\n', { headers: { 'Content-Type': 'application/x-bibtex; charset=utf-8' } });
