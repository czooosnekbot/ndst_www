<script>
  import { files } from '../stores.js';

  export let data;
  import Viewer from "../Tools/Viewer.svelte";
  import Subjects from "../UI/Subjects.svelte";
  import UsernameBlock from "../Tools/UsernameBlock.svelte";
  import LatestMaterials from "../Tools/LatestMaterials.svelte";

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
    const previewBox = document.querySelector('#file-preview');
    const header = document.querySelector(".header");
    const headerSmall = document.querySelector(".header--collapsed");
    const subjects = document.querySelector("#subjects");
    const materialSmall = document.querySelector(".material--collapsed");
    previewBox.classList.toggle('d-none', true);
    header.style = "display: flex;";
    headerSmall.style = "display: none !important;";
    subjects.style = "display: none !important;";
    materialSmall.classList.toggle('d-none', true);
  }

  function copyUrl(e) {
    const desiredURL = document.querySelector('iframe').src;
    navigator.clipboard.writeText(
        desiredURL
    );
    e.target.className = "badge badge-success ml-2";
    e.target.innerHTML = '<i class="far fa-check-circle"></i> Skopiowano!';
    setTimeout(() => {
      e.target.className = "badge badge-info ml-2";
      e.target.innerHTML = '<i class="far fa-copy"></i> Kopiuj link';
    }, 500);
  }
</script>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Podkova&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Asap&display=swap");
  .header {
    min-height: 100vh;
  }
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

  .badge-info {
    cursor: pointer;
  }

  .subjects {
    min-height: 100%c;
  }
</style>

<header
  class="header h-auto d-flex flex-column justify-content-center py-5 py-md-3 align-items-center">
  <img src="./education.png" width="100" alt>
  <h1 class="mt-3 mt-md-4 mb-3 text-center">
    <UsernameBlock />
  </h1>
  <p class="text-center">
    Dobrze Cię widzieć. Zobacz ostatnio dodane materiały.
  </p>
  <div
    class="row mt-2 mb-5 w-100 justify-content-center" id="latest">
    <LatestMaterials {data} />
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
    <i class="fas fa-home"></i>
    Moje ndst.pl
  </span>
</div>

<div
  class="text-light material--collapsed py-3 flex-row flex-wrap justify-content-center align-items-center d-none">
  <div class="d-flex flex-column align-items-center justify-content-center">
    
    <div class="d-flex justify-content-center align-items-center">
      <div class="border-right border-light pr-4 d-none d-md-block">
        <h4>Właśnie przeglądasz</h4>
      </div>
      <div class="d-flex flex-column justify-content-center align-items-center pl-4">
        <strong class="h4 m-0">{$files.title}</strong>
        <div class="d-flex flex-row mt-1">
          <small><i class="far fa-file"></i> {$files.filename}</small>
          <span on:click={copyUrl} class="badge badge-info ml-2 copy-url"><i class="far fa-copy"></i> Skopiuj link</span>
          {#if $files.filename.split('.')[1] == 'pdf'}<a href="https://cdn.czooosnek.cloud/files/{$files.filename}" download class="text-white badge badge-danger ml-2"><i class="fas fa-arrow-down"></i> Pobierz</a>{/if}
        </div>
      </div>
    </div>
  </div>
</div>

<div class="subjects" style="display: none !important;" id="subjects">
  <Subjects
    {data}
    />
</div>

<Viewer />
