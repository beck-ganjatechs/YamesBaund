import { text } from '@sveltejs/kit';
import { generateProjectOverview } from '$lib/projectOverview.js';

export async function GET() {
  const overview = await generateProjectOverview();
  return text(overview);
}