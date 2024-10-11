import { ollamaGenerate } from './ollamaApi.js';

export async function generateSvelteComponent(componentName, documentation) {
  const prompt = `Given the following information, design a Svelte component that implements the described functionality. Do not use any specific code from the original project, but create a new implementation based on the concepts and logic described:

Component Name: ${componentName}
Documentation: ${documentation}

Provide a complete Svelte component implementation, including all necessary code such as imports, props, variables, functions, HTML structure, and styles. Ensure the component follows Svelte best practices and is well-organized.

Svelte Component:`;

  return await ollamaGenerate(prompt);
}