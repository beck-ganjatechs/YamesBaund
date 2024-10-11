import { json } from '@sveltejs/kit';
import { analyzeCode } from '$lib/codeAnalyzer.js';

export async function POST({ request }) {
  const formData = await request.formData();
  const files = formData.getAll('files');

  const analyzedFiles = await Promise.all(
    files.map(async (file) => {
      const content = await file.text();
      const documentation = await analyzeCode(content, file.name);
      return { name: file.name, documentation };
    })
  );

  return json(analyzedFiles);
}