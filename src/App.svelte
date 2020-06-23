<script>
    import Header from './UI/Header.svelte';
    import Subjects from './UI/Subjects.svelte';

    let data;
    fetch('http://4u.czooosnek.cloud:81/ndst')
        .then(response => response.json())
        .then(response => data = response)

</script>

<Header {data} />
<Subjects {data} />
