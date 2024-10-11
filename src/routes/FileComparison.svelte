<script>
  import { gsap } from 'gsap';

  export let analyzedFiles = [];
  export let comparisonResult = '';

  let file1 = '';
  let file2 = '';

  async function compareFiles() {
    if (!file1 || !file2) return;

    try {
      const response = await fetch('/api/compare-files', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ file1, file2 })
      });

      if (response.ok) {
        comparisonResult = await response.text();
        gsap.from('.comparison-result', { opacity: 0, y: 20, duration: 0.5 });
      } else {
        console.error('Failed to compare files');
      }
    } catch (error) {
      console.error('Error comparing files:', error);
    }
  }
</script>

<div>
  <h2 class="text-2xl font-semibold mb-4">File Comparison</h2>
  <div class="flex space-x-2 mb-4">
    <select class="select select-bordered w-full max-w-xs" bind:value={file1}>
      <option value="">Select first file</option>
      {#each analyzedFiles as file}
        <option value={file.name}>{file.name}</option>
      {/each}
    </select>
    <select class="select select-bordered w-full max-w-xs" bind:value={file2}>
      <option value="">Select second file</option>
      {#each analyzedFiles as file}
        <option value={file.name}>{file.name}</option>
      {/each}
    </select>
    <button class="btn btn-primary" on:click={compareFiles} disabled={!file1 || !file2}>Compare</button>
  </div>
  {#if comparisonResult}
    <div class="comparison-result bg-base-200 p-4 rounded">
      <h3 class="text-xl font-semibold mb-2">Comparison Result:</h3>
      <p>{comparisonResult}</p>
    </div>
  {/if}
</div>