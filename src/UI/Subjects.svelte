<script>
  export let data;
  import Viewer from "../Tools/Viewer.svelte";
  import PdfViewer from "../Tools/PdfViewer.svelte";
  import SubjectsList from "../Tools/SubjectsList.svelte";
  import MaterialsList from "../Tools/MaterialsList.svelte"
  export let filenameSelectedToPreview;
  export let titleSelectedToPreview;
  $: filenameSelectedToPreview;
  $: titleSelectedToPreview;

  function getPreview(e) {
    const materialSmall = document.querySelector(".material--collapsed");
    filenameSelectedToPreview = e.target.id;
    titleSelectedToPreview = document.getElementById(`${e.target.id}--title`).textContent;
    materialSmall.classList.toggle('d-none', false);
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
</style>

<main class="h-100 w-100 d-flex align-items-center flex-column">
  <nav class="pt-2 pt-md-5 row justify-content-center align-items-center">
    <div class="pt-5 col-11 col-md-6 m-4">
      <div class="d-flex flex-column justify-content-center align-items-center">
        <div class="d-flex justify-content-center align-items-center flex-wrap">
          <SubjectsList {data}, selectedClass = 1 />
        </div>
      </div>
      <div class="d-flex flex-column justify-content-center align-items-center">
        <div class="d-flex justify-content-center align-items-center flex-wrap">
          <SubjectsList {data}, selectedClass = 2 />
        </div>
      </div>
      <div class="d-flex flex-column justify-content-center align-items-center">
        <div class="d-flex justify-content-center align-items-center flex-wrap">
         <SubjectsList {data}, selectedClass = 3 />
        </div>
      </div>
    </div>
  </nav>
  <div class="materials row align-items-center">
    <div class="d-flex align-items-center justify-content-center">
      <div class="mt-3 mt-md-4 d-flex justify-content-center align-items-center col-10 col-md-9 row m-0">
        <MaterialsList {data} on:click={getPreview} />
      </div>
    </div>
  </div>
</main>
