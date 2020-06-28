<script>
    const username = localStorage.getItem("name");
    
    const hours = new Date().getHours();
    const isDay = hours > 6 && hours < 20;
    const isEvening = hours >= 20 && hours < 23;
</script>

{#if username === 'IAmAtSchool'}
  Witaj w szkole!
{:else if username}
  {#if isDay}
    Dzień dobry, {username}!
  {:else if isEvening}Dobry wieczór, {username}!{:else}Już noc, {username}!{/if}
{:else}Witaj, przyjacielu!{/if}