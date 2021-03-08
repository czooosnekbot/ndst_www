<script>
  export let data;
  import { files } from '../stores.js';
  
  function getPreview(e) {
    const previewBox = document.querySelector("#file-preview");
    const materialSmall = document.querySelector(".material--collapsed");
    files.change({
      filename: e.target.id,
      title: document.getElementById(`${e.target.id}--title`).textContent
    })
    previewBox.classList.toggle('d-none', false);
    materialSmall.classList.toggle('d-none', false);
    collapseHeader();
  }

  function collapseHeader(e) {
    const header = document.querySelector(".header");
    const headerSmall = document.querySelector(".header--collapsed");
    const subjects = document.querySelector("#subjects");
    header.style = "display: none !important;";
    headerSmall.style =
      "position: fixed !important; display: flex; width: 100%; z-index: 9999;";
    subjects.style = "display: flex !important;";
  }
</script>

<style>
  .latest-element {
    background: white;
    border-radius: 10px;
    color: black;
    margin: 0.4rem;
  }
  .subject--name {
    font-size: 0.8rem !important;
  }
</style>

{#if data}
  {#each data as subject}
    {#each subject.materials as material}
      {#if new Date().getTime() - material.createdOn <= 604800000}
        <div class="col-8 col-md-3 p-1 pl-3 latest-element">
          {#if material.title.length > 26}
            <strong class="mr-auto m-0">
              {material.title.slice(0, 26).trim()}...
            </strong>
          {:else}
            <strong class="mr-auto m-0">{material.title}</strong>
          {/if}
          <div class="d-flex">
            <span id="{material.filename}--title" class="d-none">
              {material.title}
            </span>
            {#if subject.fullname.length > 17}
              <span class="m-0 p-0 mr-1 subject--name">
                {subject.fullname.slice(0, 17).trim()}...
              </span>
            {:else}
              <span class="m-0 p-0 mr-1 subject--name">{subject.fullname}</span>
            {/if}
            <span
              on:click={(e) => getPreview(e)}
              id={material.filename}
              style="cursor: pointer"
              class="badge badge-info cursor-pointer">
              Zobacz
            </span>
          </div>
        </div>
      {/if}
    {/each}
  {/each}
{/if}
