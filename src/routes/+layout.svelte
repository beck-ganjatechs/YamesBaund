<script>
  import '../app.css';
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';

  let theme = 'light';

  function toggleTheme() {
    theme = theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  onMount(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    theme = savedTheme;
    document.documentElement.setAttribute('data-theme', theme);

    gsap.to('.theme-toggle', { rotation: 360, duration: 1, ease: 'elastic.out(1, 0.3)' });
  });
</script>

<div class="min-h-screen bg-base-100 text-base-content">
  <nav class="navbar bg-base-200">
    <div class="flex-1">
      <a href="/" class="btn btn-ghost normal-case text-xl">Svelte Ollama Analyzer</a>
    </div>
    <div class="flex-none">
      <button class="btn btn-square btn-ghost theme-toggle" on:click={toggleTheme}>
        {#if theme === 'light'}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
        {:else}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
        {/if}
      </button>
    </div>
  </nav>

  <main>
    <slot />
  </main>

  <footer class="footer footer-center p-4 bg-base-200 text-base-content">
    <div>
      <p>Copyright © 2023 - All rights reserved by Svelte Ollama Analyzer</p>
    </div>
  </footer>
</div>

<style>
  :global(html) {
    overflow-y: scroll;
  }
</style>