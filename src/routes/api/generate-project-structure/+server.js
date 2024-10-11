import { json } from '@sveltejs/kit';
import { generateProjectStructure } from '$lib/projectStructureGenerator.js';

export async function POST({ request }) {
  const { components } = await request.json();
  const projectStructure = await generateProjectStructure(components);
  return json(projectStructure);
}