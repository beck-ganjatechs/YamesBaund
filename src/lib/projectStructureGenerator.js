import { ollamaGenerate } from './ollamaApi.js';

export async function generateProjectStructure(components) {
  const prompt = `Given the following Svelte components, generate a proper Svelte project structure including routing and any necessary additional files. Do not include any specific implementation details from the original project, but create a new structure based on best practices for Svelte applications:

Components:
${components.map(c => c.name).join('\n')}

Provide a JSON object representing the project structure, including:
1. Folder structure
2. File names
3. Brief description of each file's purpose

Project Structure:`;

  const structureJson = await ollamaGenerate(prompt);
  return JSON.parse(structureJson);
}