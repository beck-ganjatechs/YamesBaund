<script>
  import { gsap } from 'gsap';

  export let analyzedFiles = [];
  export let generatedComponents = [];

  async function generateComponents() {
    try {
      const response = await fetch('/api/generate-components', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ analyzedFiles })
      });

      if (response.ok) {
        generatedComponents = await response.json();
        gsap.from('.generated-component', { opacity: 0, y: 20, stagger: 0.1 });
      } else {
        console.error('Failed to generate Svelte components');
      }
    } catch (error) {
      console.error('Error generating Svelte components:', error);
    }
  }
</script>

<div>
  <h2 class="text-2xl font-semibold mb-4">Svelte Component Generator</h2>
  <button class="btn btn-primary" on:click={generateComponents} disabled={analyzedFiles.length === 0}>
    Generate Svelte Components
  </button>
  {#if generatedComponents.length > 0}
    <h3 class="text-xl font-semibold mt-4 mb-2">Generated Components:</h3>
    <ul class="space-y-4">
      {#each generatedComponents as component}
        <li class="generated-component">
          <div class="bg-base-200 p-4 rounded">
            <strong class="text-lg">{component.name}</strong>
            <pre class="mt-2 bg-base-300 p-2 rounded overflow-x-auto"><code>{component.code}</code></pre>
          </div>
        </li>
      {/each}
    </ul>
  {/if}
</div>