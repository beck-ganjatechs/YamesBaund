<script>
  import { createEventDispatcher } from 'svelte';
  import { gsap } from 'gsap';

  export let analyzedFiles = [];

  let fileInput;
  let analyzing = false;
  const dispatch = createEventDispatcher();

  async function handleFileUpload() {
    if (!fileInput.files.length) return;

    const formData = new FormData();
    for (let i = 0; i < fileInput.files.length; i++) {
      formData.append('files', fileInput.files[i]);
    }

    analyzing = true;

    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        analyzedFiles = await response.json();
        dispatch('analyzed', analyzedFiles);
        gsap.from('.file-item', { opacity: 0, y: 20, stagger: 0.1 });
      } else {
        console.error('Failed to analyze files');
      }
    } catch (error) {
      console.error('Error analyzing files:', error);
    } finally {
      analyzing = false;
    }
  }
</script>

<div>
  <h2 class="text-2xl font-semibold mb-4">Code Analyzer</h2>
  <input type="file" class="file-input file-input-bordered w-full max-w-xs" bind:this={fileInput} multiple accept=".js,.jsx,.ts,.tsx,.html,.py,.css,.json" on:change={handleFileUpload}>
  {#if analyzing}
    <progress class="progress w-56 mt-4"></progress>
  {/if}
  {#if analyzedFiles.length > 0}
    <h3 class="text-xl font-semibold mt-4 mb-2">Analyzed Files:</h3>
    <ul class="space-y-2">
      {#each analyzedFiles as file}
        <li class="file-item bg-base-200 p-2 rounded">
          <span class="font-semibold">{file.name}:</span> {file.documentation.substring(0, 100)}...
        </li>
      {/each}
    </ul>
  {/if}
</div>