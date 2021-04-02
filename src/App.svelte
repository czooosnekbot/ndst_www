<script>
  import Body from "./Body.svelte";

  let data;
  fetch("https://teb.ndst.pl/api/")
    .then(response => response.json())
    .then(response => (data = response));
</script>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Podkova&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Asap&display=swap");
</style>

<Body {data} />
