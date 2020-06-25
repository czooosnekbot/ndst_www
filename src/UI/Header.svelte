<script>
  const username = localStorage.getItem("name");

  let filenameSelectedToPreview;
  $: filenameSelectedToPreview;
  let titleSelectedToPreview;
  $: titleSelectedToPreview;

  const hours = new Date().getHours();
  const isDay = hours > 6 && hours < 20;
  const isEvening = hours >= 20 && hours < 23;

  export let data;
  import Viewer from "../Tools/Viewer.svelte";
  import Subjects from "../UI/Subjects.svelte";

  function getPreview(e) {
    filenameSelectedToPreview = e.target.id;
    titleSelectedToPreview = document.getElementById(`${e.target.id}--title`)
      .textContent;
  }

  function collapseHeader(e) {
    const header = document.querySelector(".header");
    const headerSmall = document.querySelector(".header--collapsed");
    const subjects = document.querySelector("#subjects");
    header.style = "display: none !important;";
    headerSmall.style = "display: flex;";
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
  .latest-element {
    background: white;
    border-radius: 10px;
    color: black;
    margin: 0.4rem;
  }
  .subject--name {
    font-size: 0.8rem !important;
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
</style>

<header
  class="header h-100 d-flex flex-column justify-content-center
  align-items-center">

  <h1 class="mt-3 mt-md-5 mb-3 text-center">
    {#if username === 'IAmAtSchool'}
      Witaj w szkole!
    {:else if username}
      {#if isDay}
        Dzień dobry, {username}!
      {:else if isEvening}
        Dobry wieczór, {username}!
      {:else}Już noc, {username}!{/if}
    {:else}Witaj, przyjacielu!{/if}

  </h1>
  <p class="text-center">
    Dobrze Cię widzieć. Zobacz ostatnio dodane materiały.
  </p>
  <div
    class="row mt-2 mb-5 d-flex justify-content-center align-items-center"
    id="latest">
    {#if data}
      {#each data as subject}
        {#each subject.materials as material}
          {#if new Date().getTime() - material.createdOn <= 604800000}
            <div class="col-8 col-md-4 p-1 pl-3 latest-element">
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
                  <span class="m-0 p-0 mr-1 subject--name">
                    {subject.fullname}
                  </span>
                {/if}
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
            </div>
          {/if}
        {/each}
      {/each}
    {/if}
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
    {#if username === 'IAmAtSchool'}
      Witaj w szkole!
    {:else if username}
      {#if isDay}
        Dzień dobry, {username}!
      {:else if isEvening}
        Dobry wieczór, {username}!
      {:else}Już noc, {username}!{/if}
    {:else}Witaj, przyjacielu!{/if}
  </h2>
  <span
    on:click={uncollapseHeader}
    style="font-size: 100%; border-radius: 8px; cursor: pointer;"
    class="badge badge-warning p-2">
    <i class="fas fa-arrow-up" />
    Powrót
  </span>
</div>

<div style="display: none !important;" id="subjects">
  <Subjects {data} />
</div>

<Viewer {filenameSelectedToPreview} {titleSelectedToPreview} />
