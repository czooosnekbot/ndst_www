<script>
    export let filenameSelectedToPreview;
    $: filenameSelectedToPreview;
    export let titleSelectedToPreview;
    $: titleSelectedToPreview;

    function copyUrl(e) {
      navigator.clipboard.writeText(`https://cdn.czooosnek.cloud/files/${filenameSelectedToPreview}`)
      e.target.className = 'badge badge-success'
      e.target.textContent = 'Skopiowano!'
      setTimeout(() => {
        e.target.className = 'badge badge-info'
        e.target.textContent = 'Kopiuj link'
      }, 500)
    }
</script>

<style>
  iframe {
    width: 73vw;
    height: 70vh;
  }
  .modal-dialog {
    max-width: 75vw !important;
  }
  @media (max-width: 700px) {
    iframe {
      width: 89vw;
      height: 70vh;
    }
    .modal-dialog {
      max-width: 95vw !important;
    }
  }
</style>


<div class="modal fade" id="previewModal" tabindex="-1" role="dialog" aria-labelledby="previewModal" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <div class="d-flex flex-column">
          <h5 class="modal-title" id="exampleModalLabel">Podgląd pliku</h5>
          <small class="font-weight-bold">{titleSelectedToPreview}</small>
          <div class="d-flex">
            <small class="mr-1">{filenameSelectedToPreview}</small>
            <span on:click={copyUrl} style="cursor: pointer;" class="badge badge-info">Kopiuj link</span>
          </div>
        </div>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        {#if filenameSelectedToPreview}
            <iframe title="Podgląd pliku" src="http://docs.google.com/gview?embedded=true&url=https://cdn.czooosnek.cloud/files/{filenameSelectedToPreview}"></iframe>
        {/if}
      </div>
    </div>
  </div>
</div>