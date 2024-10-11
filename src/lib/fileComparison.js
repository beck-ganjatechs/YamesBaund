import { ollamaGenerate } from './ollamaApi.js';

export async function compareFiles(file1, file2) {
  const prompt = `Compare the following two files and provide a detailed analysis of their similarities and differences:

File 1: ${file1}
File 2: ${file2}

Please include:
1. Overall similarity assessment
2. Key differences in structure or functionality
3. Potential areas for code reuse or refactoring
4. Any notable strengths or weaknesses in either file

Comparison Analysis:`;

  return await ollamaGenerate(prompt);
}