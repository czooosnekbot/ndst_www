<script>
    export let selectedToPreview;
    $: selectedToPreview;
</script>


<div class="modal fade" id="previewModal" tabindex="-1" role="dialog" aria-labelledby="previewModal" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        {#if selectedToPreview}
            <iframe title="Podgląd pliku" src="http://docs.google.com/gview?embedded=true&url=https://cdn.czooosnek.cloud/files/{selectedToPreview}"></iframe>
        {/if}
      </div>
    </div>
  </div>
</div>