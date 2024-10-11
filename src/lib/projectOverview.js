import { ollamaGenerate } from './ollamaApi.js';

export async function generateProjectOverview() {
  const prompt = `Based on the analyzed code files, provide a comprehensive overview of the entire project:

Project Overview:`;

  return await ollamaGenerate(prompt);
}