<script>
  export let data;
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
              <span class="m-0 p-0 mr-1 subject--name">{subject.fullname}</span>
            {/if}
            <span
              on:click
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
