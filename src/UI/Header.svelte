<script>
    let username = localStorage.getItem('name');
    let filenameSelectedToPreview;
    $: filenameSelectedToPreview;
    let titleSelectedToPreview;
    $: titleSelectedToPreview;
    const hours = new Date().getHours()
    const isDay = hours > 6 && hours < 20
    const isEvening = hours >= 20 && hours < 23
    export let data;
    import Viewer from '../Tools/Viewer.svelte'

    function getPreview(e) {
        filenameSelectedToPreview = e.target.id
        titleSelectedToPreview = document.getElementById(`${e.target.id}--title`).textContent
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Podkova&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Asap&display=swap');
    header {
        background: #9B2E35;
        color: white;
        font-family: 'Asap', sans-serif;
        min-height: 33vh;
    }
    h1 {
        font-family: 'Podkova', serif;
        font-size: 400%;
    }
    .latest-element {
        background: white;
        border-radius: 10px;
        color: black;
        margin: .4rem;
    }
    .subject--name {
        font-size: .8rem !important;
    }
    @media (max-width: 700px) {
        header {
            min-height: 100vh;
        }    
    }
</style>

<header class="d-flex flex-column justify-content-center align-items-center">
    <h1 class="mt-3 mt-md-5 mb-3 text-center">
        {#if username}
            {#if isDay}
            Dzień dobry, {username}!
            {:else if isEvening}
            Dobry wieczór, {username}!
            {:else}
            Już noc, {username}!
            {/if}
                {:else}
                Witaj, przyjacielu!
        {/if}
    </h1>
    <p class="text-center">Dobrze Cię widzieć. Zobacz ostatnio dodane materiały.</p>
    <div class="row mt-2 mb-5 d-flex justify-content-center align-items-center" id="latest">
        {#if data}
            {#each data as subject}
                {#each subject.materials as material}
                    {#if new Date().getTime() - material.createdOn <= 604800000}
                    <div class="col-8 col-md-4 p-1 pl-3 latest-element">
                        {#if material.title.length > 26}
                            <strong class="mr-auto m-0">{material.title.slice(0,26).trim()}...</strong>
                            {:else}
                            <strong class="mr-auto m-0">{material.title}</strong>
                        {/if}
                        <div class="d-flex">
                            <span id="{material.filename}--title" class="d-none">{material.title}</span>
                            {#if subject.fullname.length > 17}
                                <span class="m-0 p-0 mr-1 subject--name">{subject.fullname.slice(0,17).trim()}...</span>
                                {:else}
                                <span class="m-0 p-0 mr-1 subject--name">{subject.fullname}</span>
                            {/if}
                            <span on:click={getPreview} id="{material.filename}" style="cursor: pointer" class="badge badge-info cursor-pointer" data-toggle="modal" data-target="#previewModal">Zobacz</span>
                        </div>
                    </div>
                    {/if}
                {/each}
            {/each}
        {/if}
    </div>
</header>

<Viewer {filenameSelectedToPreview} {titleSelectedToPreview} />