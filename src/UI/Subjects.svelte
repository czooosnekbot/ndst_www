<script>
  export let data;
  import Viewer from "../Tools/Viewer.svelte";
  import PdfViewer from "../Tools/PdfViewer.svelte";
  import SubjectsList from "../Tools/SubjectsList.svelte";
  import MaterialsList from "../Tools/MaterialsList.svelte";
  export let filenameSelectedToPreview;
  export let titleSelectedToPreview;
  $: filenameSelectedToPreview;
  $: titleSelectedToPreview;

  function getPreview(e) {
    const materialSmall = document.querySelector(".material--collapsed");
    files.change({
      filename: e.target.id,
      title: document.getElementById(`${e.target.id}--title`).textContent,
    });
    filenameSelectedToPreview = e.target.id;
    titleSelectedToPreview = document.getElementById(`${e.target.id}--title`)
      .textContent;
    materialSmall.classList.toggle("d-none", false);
  }

  function filterMaterialsBySubject(e) {
    const subject = e.target.id;
    const materialsFromSubject = document.querySelectorAll(`.${subject}`);
    const allMaterials = document.querySelectorAll(".material");
    allMaterials.forEach((elem) => {
      elem.style = "display: none !important;";
    });
    materialsFromSubject.forEach((elem) => {
      elem.style = "display: flex !important;";
    });
  }

  function filterItems() {
    const searchBar = document.querySelector('#search');
    const keyword = searchBar.value.toLowerCase();
    const articles = document.querySelectorAll('article');
    articles.forEach(article => {
      let containsKeyword = false;
      if (article.dataset.keywords) {
        containsKeyword = (article.dataset.keywords.toString().toLowerCase().search(keyword) > -1) ? true : false;
      }
      article.classList.toggle('d-none', !containsKeyword);
    })
  }
</script>

<main class="h-100 w-100 d-flex align-items-center flex-column">
  <nav class="pt-2 pt-md-5 row justify-content-center align-items-center">
    <div class="pt-5 col-11 col-md-6 m-4">
      <div class="d-flex flex-column justify-content-center align-items-center">
        <div class="d-flex justify-content-center align-items-center flex-wrap">
          <SubjectsList {data} selectedClass="1" />
        </div>
      </div>
      <div class="d-flex flex-column justify-content-center align-items-center">
        <div class="d-flex justify-content-center align-items-center flex-wrap">
          <SubjectsList {data} selectedClass="2" />
        </div>
      </div>
      <div class="d-flex flex-column justify-content-center align-items-center">
        <div class="d-flex justify-content-center align-items-center flex-wrap">
          <SubjectsList {data} selectedClass="3" />
        </div>
      </div>
    </div>
  </nav>
  <div class="search-bar">
    <input id="search" required on:input={() => filterItems()} />
    <button class="search-btn" type="submit">
      <span>Search</span>
    </button>
  </div>
  <div class="materials row align-items-center w-100">
    <div class="d-flex align-items-center justify-content-center w-100">
      <div
        class="mt-3 mt-md-4 d-flex justify-content-center col-10 col-md-9 row m-0 w-100"
      >
        <MaterialsList {data} />
      </div>
    </div>
  </div>
</main>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Podkova&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Asap&display=swap");
  main {
    background: #45414b;
    color: white;
  }
  button,
  input {
    font: 1em Hind, sans-serif;
    line-height: 1.5em;
  }
  input {
    color: #171717;
  }
  .search-bar {
    display: flex;
  }

  .search-bar input,
  .search-btn,
  .search-btn:before,
  .search-btn:after {
    transition: all 0.25s ease-out;
  }
  .search-bar input,
  .search-btn {
    width: 3em;
    height: 3em;
  }
  .search-bar input:invalid:not(:focus),
  .search-btn {
    cursor: pointer;
  }
  .search-bar,
  .search-bar input:focus,
  .search-bar input:valid {
    width: 100%;
  }
  .search-bar input:focus,
  .search-bar input:not(:focus) + .search-btn:focus {
    outline: transparent;
  }
  .search-bar {
    margin: auto;
    padding: 1.5em;
    justify-content: center;
    max-width: 30em;
  }
  .search-bar input {
    background: transparent;
    border-radius: 1.5em;
    box-shadow: 0 0 0 0.4em #171717 inset;
    padding: 0.75em;
    transform: translate(0.5em, 0.5em) scale(0.5);
    transform-origin: 100% 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  .search-bar input::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  .search-bar input:focus,
  .search-bar input:valid {
    background: #fff;
    border-radius: 0.375em 0 0 0.375em;
    box-shadow: 0 0 0 0.1em #d9d9d9 inset;
    transform: scale(1);
  }
  .search-btn {
    background: #9b2e35;
    border-radius: 0 0.75em 0.75em 0 / 0 1.5em 1.5em 0;
    padding: 0.75em;
    position: relative;
    transform: translate(0.25em, 0.25em) rotate(45deg) scale(0.25, 0.125);
    transform-origin: 0 50%;
  }
  .search-btn:before,
  .search-btn:after {
    content: "";
    display: block;
    opacity: 0;
    position: absolute;
  }
  .search-btn:before {
    border-radius: 50%;
    box-shadow: 0 0 0 0.2em #f1f1f1 inset;
    top: 0.75em;
    left: 0.75em;
    width: 1.2em;
    height: 1.2em;
  }
  .search-btn:after {
    background: #f1f1f1;
    border-radius: 0 0.25em 0.25em 0;
    top: 51%;
    left: 51%;
    width: 0.75em;
    height: 0.25em;
    transform: translate(0.2em, 0) rotate(45deg);
    transform-origin: 0 50%;
  }
  .search-btn span {
    display: inline-block;
    overflow: hidden;
    width: 1px;
    height: 1px;
  }

  /* Active state */
  .search-bar input:focus + .search-btn,
  .search-bar input:valid + .search-btn {
    background: #9b2e35;
    border-radius: 0 0.375em 0.375em 0;
    transform: scale(1);
  }
  .search-bar input:focus + .search-btn:before,
  .search-bar input:focus + .search-btn:after,
  .search-bar input:valid + .search-btn:before,
  .search-bar input:valid + .search-btn:after {
    opacity: 1;
  }
  .search-bar input:focus + .search-btn:hover,
  .search-bar input:valid + .search-btn:hover,
  .search-bar input:valid:not(:focus) + .search-btn:focus {
    background: #9b2e35;
  }
  .search-bar input:focus + .search-btn:active,
  .search-bar input:valid + .search-btn:active {
    transform: translateY(1px);
  }

  @media screen and (prefers-color-scheme: dark) {
    input {
      color: #f1f1f1;
    }
    .search-bar input {
      box-shadow: 0 0 0 0.4em #f1f1f1 inset;
    }
    .search-bar input:focus,
    .search-bar input:valid {
      background: #3d3d3d;
      box-shadow: 0 0 0 0.1em #3d3d3d inset;
    }
    .search-btn {
      background: #f1f1f1;
    }
  }
</style>
