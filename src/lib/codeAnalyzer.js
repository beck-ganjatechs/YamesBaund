import { ollamaGenerate } from './ollamaApi.js';

export async function analyzeCode(content, fileName) {
  const prompt = `Analyze the following code and provide a detailed documentation:

${content}

Please include:
1. File name: ${fileName}
2. Component name and purpose (if applicable)
3. Functions or classes defined
4. Main functionality and logic
5. Any important dependencies or imports
6. Key elements or features

Documentation:`;

  return await ollamaGenerate(prompt);
}