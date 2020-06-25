<script>
    export let data;

    import Header from './UI/Header.svelte';
    import NameSaver from './Tools/NameSaver.svelte';

   
</script>

<style>

</style>

<div class="row no-gutters h-100">
    <div id="header" class="w-100 h-100">
        <Header {data} />
    </div>
</div>

<NameSaver />