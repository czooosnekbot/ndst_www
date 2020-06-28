<script>
    export let filenameSelectedToPreview;
</script>

{#if filenameSelectedToPreview}
    <iframe title="Podgląd pliku" src="http://docs.google.com/gview?embedded=true&url=https://cdn.czooosnek.cloud/files/{filenameSelectedToPreview}" />
{/if}