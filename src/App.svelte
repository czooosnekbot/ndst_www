<script>
    import Header from './UI/Header.svelte';
    import Subjects from './UI/Subjects.svelte';

    let data;
    fetch('http://4u.czooosnek.cloud:81/ndst')
        .then(response => response.json())
        .then(response => data = response)

</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Podkova&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Asap&display=swap');
</style>

<Header {data} />
<Subjects {data} />
