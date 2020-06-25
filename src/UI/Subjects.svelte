<script>
  let filenameSelectedToPreview;
  $: filenameSelectedToPreview;
  let titleSelectedToPreview;
  $: titleSelectedToPreview;
  export let data;
  import Viewer from "../Tools/Viewer.svelte";

  function getPreview(e) {
    filenameSelectedToPreview = e.target.id;
    titleSelectedToPreview = document.getElementById(`${e.target.id}--title`)
      .textContent;
  }

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
  @import url("https://fonts.googleapis.com/css2?family=Podkova&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Asap&display=swap");
  main {
    background: #45414b;
    color: white;
  }
  .class {
    font-size: 90%;
  }
  .h1 {
    font-family: "Podkova", serif;
  }
  p,
  h4 {
    font-family: "Asap", sans-serif;
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
  .cursor-pointer {
    cursor: pointer;
  }
</style>

<main class="h-100 w-100 d-flex align-items-center flex-column">
  <nav class="row justify-content-center align-items-center">
    <div class="col-11 col-md-6 mt-4">
      <div class="d-flex flex-column justify-content-center align-items-center">
        <div class="d-flex justify-content-center align-items-center flex-wrap">
          {#if data}
            <span class="badge badge-info ml-1">Klasa I</span>
            {#each data as subject}
              {#if subject.id.slice(-1) === '1'}
                <span
                  on:click={filterMaterialsBySubject}
                  class="cursor-pointer badge badge-secondary ml-1 m-1"
                  id={subject.id}>
                  {subject.fullname}
                </span>
              {/if}
            {/each}
          {/if}
        </div>
      </div>
      <div class="d-flex flex-column justify-content-center align-items-center">
        <div class="d-flex justify-content-center align-items-center flex-wrap">
          {#if data}
            <span class="badge badge-info ml-1">Klasa II</span>
            {#each data as subject}
              {#if subject.id.slice(-1) === '2'}
                <span
                  on:click={filterMaterialsBySubject}
                  class="cursor-pointer badge badge-secondary ml-1 m-1"
                  id={subject.id}>
                  {subject.fullname}
                </span>
              {/if}
            {/each}
          {/if}
        </div>
      </div>
      <div class="d-flex flex-column justify-content-center align-items-center">
        <div class="d-flex justify-content-center align-items-center flex-wrap">
          {#if data}
            <span class="badge badge-info ml-1">Klasa III</span>
            {#each data as subject}
              {#if subject.id.slice(-1) === '3'}
                <span
                  on:click={filterMaterialsBySubject}
                  class="cursor-pointer badge badge-secondary ml-1 m-1"
                  id={subject.id}>
                  {subject.fullname}
                </span>
              {/if}
            {/each}
          {/if}
        </div>
      </div>
    </div>
  </nav>
  <div class="materials row align-items-center">
    <div class="d-flex align-items-center justify-content-center">
      <div class="col-10 col-md-9 row m-0">
        {#if data}
          {#each data as subject}
            {#each subject.materials as material}
              <article
                class="{subject.id} col-10 col-md-3 material m-1 d-flex
                flex-column p-1"
                style=""
                id={material.filename}>
                {#if material.title.length > 26}
                  <strong class="mr-auto m-0">
                    {material.title.slice(0, 26).trim()}...
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
                    <span class="m-0 p-0 mr-1 subject--name">
                      {subject.fullname}
                    </span>
                  {/if}
                  <span class="d-none" id="{material.filename}--title">
                    {material.title}
                  </span>
                  <span
                    on:click={getPreview}
                    id={material.filename}
                    style="cursor: pointer"
                    class="badge badge-info cursor-pointer"
                    data-toggle="modal"
                    data-target="#previewModal">
                    Zobacz
                  </span>
                </div>
              </article>
            {/each}
          {/each}
        {/if}
      </div>
    </div>
  </div>
</main>

<Viewer {filenameSelectedToPreview} {titleSelectedToPreview} />
