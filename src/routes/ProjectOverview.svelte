<script>
  export let projectOverview = '';
</script>

<div>
  <h2 class="text-2xl font-semibold mb-4">Project Overview</h2>
  {#if projectOverview}
    <p class="bg-base-200 p-4 rounded">{projectOverview}</p>
  {:else}
    <p class="text-error">No project overview available.</p>
  {/if}
</div>