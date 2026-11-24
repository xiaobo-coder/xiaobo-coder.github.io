import type { APIRoute } from 'astro';
import { papers } from '../utils/site';
export const GET: APIRoute = () => new Response(JSON.stringify(papers, null, 2), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
