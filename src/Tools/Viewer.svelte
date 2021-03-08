<script>
  import { files } from '../stores.js';
</script>

<style>
  iframe {
    position: fixed;
    width: 100vw;
    height: 100vh;
    bottom: 0;
    height: 75vh;
    display: block;
  }

  @media (max-width: 700px) {
    iframe {
      height: 87vh;
    }
  }
</style>

<div class="d-none" id="file-preview">
  {#if $files.filename}
          <iframe
            title="Podgląd pliku"
            src="https://docs.google.com/gview?embedded=true&url=https://cdn.czooosnek.cloud/files/{$files.filename}" />
        {/if}
</div>
