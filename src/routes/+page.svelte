<script>
  import { fade } from 'svelte/transition';
  import { gsap } from 'gsap';
  import CodeAnalyzer from './CodeAnalyzer.svelte';
  import ProjectOverview from './ProjectOverview.svelte';
  import SvelteComponentGenerator from './SvelteComponentGenerator.svelte';
  import FileComparison from './FileComparison.svelte';

  let projectOverview = '';
  let analyzedFiles = [];
  let generatedComponents = [];
  let comparisonResult = '';

  import { onMount } from 'svelte';

  onMount(async () => {
    try {
      const response = await fetch('/api/project-overview');
      if (response.ok) {
        projectOverview = await response.text();
      } else {
        console.error('Failed to fetch project overview');
      }
    } catch (error) {
      console.error('Error fetching project overview:', error);
    }

    gsap.from('h1', { duration: 1, y: -50, opacity: 0, ease: 'back' });
    gsap.from('.card', { duration: 0.5, opacity: 0, y: 20, stagger: 0.2 });
  });
</script>

<main class="container mx-auto p-4">
  <h1 class="text-4xl font-bold text-center mb-8 text-primary">Svelte Ollama Code Analyzer</h1>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="card bg-base-100 shadow-xl" transition:fade>
      <div class="card-body">
        <CodeAnalyzer bind:analyzedFiles />
      </div>
    </div>
    
    <div class="card bg-base-100 shadow-xl" transition:fade>
      <div class="card-body">
        <ProjectOverview {projectOverview} />
      </div>
    </div>
    
    <div class="card bg-base-100 shadow-xl" transition:fade>
      <div class="card-body">
        <SvelteComponentGenerator {analyzedFiles} bind:generatedComponents />
      </div>
    </div>
    
    <div class="card bg-base-100 shadow-xl" transition:fade>
      <div class="card-body">
        <FileComparison {analyzedFiles} bind:comparisonResult />
      </div>
    </div>
  </div>
</main>