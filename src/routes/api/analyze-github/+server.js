import { json } from '@sveltejs/kit';
import { analyzeCode } from '$lib/codeAnalyzer.js';

export async function POST({ request }) {
  const { repo } = await request.json();
  
  // Fetch repository contents (this is a placeholder, you'll need to implement the actual GitHub API call)
  const repoContents = await fetchGitHubRepoContents(repo);

  const analyzedFiles = await Promise.all(
    repoContents.map(async (file) => {
      const documentation = await analyzeCode(file.content, file.name);
      return { name: file.name, documentation };
    })
  );

  return json(analyzedFiles);
}

async function fetchGitHubRepoContents(repo) {
  // Implement GitHub API call to fetch repository contents
  // This is a placeholder function
  return [
    { name: 'example.js', content: 'console.log("Hello, World!");' },
    // Add more files as needed
  ];
}