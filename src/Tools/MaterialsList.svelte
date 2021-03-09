<script>
  export let data;
  import { files } from "../stores.js";

  function getPreview(e) {
    const previewBox = document.querySelector("#file-preview");
    const materialSmall = document.querySelector(".material--collapsed");
    files.change({
      filename: e.target.id,
      title: document.getElementById(`${e.target.id}--title`).textContent,
    });
    previewBox.classList.toggle("d-none", false);
    materialSmall.classList.toggle("d-none", false);
    console.log(files);
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

{#if data}
  {#each data as subject}
    {#each subject.materials as material}
      <article
        class="{subject.id} col-10 col-md-3 material m-1 p-1 w-100"
        style=""
        id={material.filename}
        data-keywords={material.keywords}
      >
        {#if material.title.length > 24}
          <strong class="mr-auto m-0">
            {material.title.slice(0, 24).trim()}...
          </strong>
        {:else}
          <strong class="mr-auto m-0">{material.title}</strong>
        {/if}
        <div>
          {#if subject.fullname.length > 17}
            <span class="m-0 p-0 mr-1 subject--name">
              {subject.fullname.slice(0, 17).trim()}...
            </span>
          {:else}
            <span class="m-0 p-0 mr-1 subject--name">{subject.fullname}</span>
          {/if}
          <span class="d-none" id="{material.filename}--title">
            {material.title}
          </span>
          <span
            on:click={(e) => getPreview(e)}
            id={material.filename}
            style="cursor: pointer"
            class="badge badge-info cursor-pointer"
          >
            Zobacz
          </span>
        </div>
      </article>
    {/each}
  {/each}
{/if}

<style>
  .class {
    font-size: 90%;
  }
  .h1 {
    font-family: "Podkova", serif;
  }
  article {
    background: white;
    color: black;
    font-family: "Asap", sans-serif;
    border-radius: 10px;
    width: 240px;
  }
  .subject--name {
    font-size: 0.8rem !important;
  }
</style>
