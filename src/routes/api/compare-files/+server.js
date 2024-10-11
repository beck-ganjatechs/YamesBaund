import { text } from '@sveltejs/kit';
import { compareFiles } from '$lib/fileComparison.js';

export async function POST({ request }) {
  const { file1, file2 } = await request.json();
  const comparisonResult = await compareFiles(file1, file2);
  return text(comparisonResult);
}