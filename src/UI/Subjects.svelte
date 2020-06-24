<script>
    let filenameSelectedToPreview;
    $: filenameSelectedToPreview;
    let titleSelectedToPreview;
    $: titleSelectedToPreview;
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
    main {
        background:#272E35;
        color: white;
        min-height: 67vh;
    }
    .btn-class {
        font-size: 6rem;
        border-bottom: .3rem solid white;
    }
    .h1 {
        font-family: 'Podkova', serif;
    }
    p {
        font-family: 'Asap', sans-serif;
    }
    nav {
        background: #2E4242;
    }
</style>

<main class="row">
    <nav class="col-3">
       
    </nav>
    <div class="col-9">
    
    </div>
</main>

<Viewer {filenameSelectedToPreview} {titleSelectedToPreview} />