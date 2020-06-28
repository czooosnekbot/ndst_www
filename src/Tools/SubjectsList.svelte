<script>
  export let data;
  export let selectedClass;

  function filterMaterialsBySubject(e) {
    const subject = e.target.id;
    const materialsFromSubject = document.querySelectorAll(`.${subject}`);
    const allMaterials = document.querySelectorAll(".material");
    allMaterials.forEach(elem => {
      elem.style = "display: none !important;";
    });
    materialsFromSubject.forEach(elem => {
      elem.style = "display: flex !important;";
    });
  }
</script>

<style>
  .cursor-pointer {
    cursor: pointer;
  }
</style>

{#if data}
  <span class="badge badge-info ml-1">Klasa {selectedClass.toString()}</span>
  {#each data as subject}
    {#if subject.id.slice(-1) === selectedClass.toString()}
      <span
        on:click={filterMaterialsBySubject}
        class="cursor-pointer badge badge-secondary ml-1 m-1"
        id={subject.id}>
        {subject.fullname}
      </span>
    {/if}
  {/each}
{/if}
