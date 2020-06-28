<script>
  export let data;
</script>

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

{#if data}
  {#each data as subject}
    {#each subject.materials as material}
      <article
        class="{subject.id} col-10 col-md-3 material m-1 d-flex flex-column p-1"
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
            <span class="m-0 p-0 mr-1 subject--name">{subject.fullname}</span>
          {/if}
          <span class="d-none" id="{material.filename}--title">
            {material.title}
          </span>
          <span
            on:click
            id={material.filename}
            style="cursor: pointer"
            class="badge badge-info cursor-pointer">
            Zobacz
          </span>
        </div>
      </article>
    {/each}
  {/each}
{/if}
