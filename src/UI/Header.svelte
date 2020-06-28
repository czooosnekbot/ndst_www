<script>
  export let filenameSelectedToPreview;
  $: filenameSelectedToPreview;
  export let titleSelectedToPreview;
  $: titleSelectedToPreview;

  export let data;
  import Viewer from "../Tools/Viewer.svelte";
  import Subjects from "../UI/Subjects.svelte";
  import UsernameBlock from "../Tools/UsernameBlock.svelte";
  import LatestMaterials from "../Tools/LatestMaterials.svelte";

  function getPreview(e) {
    const infoBar = document.querySelector(".material--collapsed");
    filenameSelectedToPreview = e.target.id;
    titleSelectedToPreview = document.getElementById(`${e.target.id}--title`)
      .textContent;
    infoBar.style = "display: block !important;";
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

  function uncollapseHeader() {
    const header = document.querySelector(".header");
    const headerSmall = document.querySelector(".header--collapsed");
    const subjects = document.querySelector("#subjects");
    header.style = "display: flex;";
    headerSmall.style = "display: none !important;";
    subjects.style = "display: none !important;";
  }

  function copyUrl(e) {
    navigator.clipboard.writeText(
      `https://cdn.czooosnek.cloud/files/${filenameSelectedToPreview}`
    );
    e.target.className = "badge badge-success ml-1";
    e.target.textContent = "Skopiowano!";
    setTimeout(() => {
      e.target.className = "badge badge-info ml-1";
      e.target.textContent = "Kopiuj link";
    }, 500);
  }
</script>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Podkova&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Asap&display=swap");

  .header,
  .header--collapsed {
    background: #9b2e35;
    color: white;
    font-family: "Asap", sans-serif;
  }
  .material--collapsed {
    background: #45414b;
    position: fixed;
    z-index: 99990;
    width: 100%;
    margin-top: 4rem;
  }
  h1 {
    font-size: 400%;
  }
  h2 {
    font-size: 300%;
  }
  h1,
  h2 {
    font-family: "Podkova", serif;
  }
  @media (max-width: 700px) {
    header {
      min-height: 100vh;
    }
    h1 {
      font-size: 280%;
    }
    h2 {
      font-size: 140%;
    }
    p {
      font-size: 80%;
    }
  }
  @media (min-width: 700px) {
    .material--collapsed {
      margin-top: 5rem;
    }
  }
</style>

<header
  class="header h-100 d-flex flex-column justify-content-center
  align-items-center">

  <h1 class="mt-3 mt-md-5 mb-3 text-center">
    <UsernameBlock />
  </h1>
  <p class="text-center">
    Dobrze Cię widzieć. Zobacz ostatnio dodane materiały.
  </p>
  <div
    class="row mt-2 mb-5 d-flex justify-content-center align-items-center"
    id="latest">
    <LatestMaterials {data} on:click={getPreview} />
  </div>
  <span
    on:click={collapseHeader}
    style="font-size: 100%; border-radius: 8px; cursor: pointer;"
    class="badge badge-warning p-2">
    <i class="fas fa-paste" />
    Tutaj znajdziesz pozostałe materiały.
  </span>
</header>

<div
  style="display: none;"
  class="header--collapsed py-3 flex-row flex-wrap justify-content-center
  align-items-center">
  <h2 class="text-center m-0 mr-3">
    <UsernameBlock />
  </h2>
  <span
    on:click={uncollapseHeader}
    style="font-size: 100%; border-radius: 8px; cursor: pointer;"
    class="badge badge-warning p-2">
    <i class="fas fa-arrow-up" />
    Powrót
  </span>
</div>

<div
  style="display: none;"
  class="text-light material--collapsed py-3 flex-row flex-wrap
  justify-content-center align-items-center">
  <div class="d-flex flex-column align-items-center justify-content-center">
    <strong class="h4 m-0">{titleSelectedToPreview}</strong>
    <div class="d-flex flex-row">
      <small>{filenameSelectedToPreview}</small>
      <span on:click={copyUrl} class="badge badge-info ml-1">Skopiuj link</span>
    </div>
  </div>
</div>

<div style="display: none !important;" id="subjects">
  <Subjects
    {data}
    {filenameSelectedToPreview}
    {titleSelectedToPreview}
    on:click={getPreview}
    />
</div>
