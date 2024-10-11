import { json } from '@sveltejs/kit';
import { generateSvelteComponent } from '$lib/componentGenerator.js';

export async function POST({ request }) {
  const { analyzedFiles } = await request.json();

  const generatedComponents = await Promise.all(
    analyzedFiles.map(async (file) => {
      const componentCode = await generateSvelteComponent(file.name, file.documentation);
      return { name: file.name.replace(/\.[^/.]+$/, ""), code: componentCode };
    })
  );

  return json(generatedComponents);
}