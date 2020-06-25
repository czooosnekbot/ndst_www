<script>
    const localStorageMount = localStorage.getItem('name')

    function setName(e) {
        const nameInput = document.querySelector('#nameInput');
        const nameModal = document.querySelector('#nameModal');
        if (nameInput.value.length >= 3) {
            localStorage.setItem('name', nameInput.value)
            nameModal.style.display = 'none'
            window.location.reload()
        } else {
            nameInput.style = 'border: 1px solid red;'
            setTimeout(() => {
                nameInput.style = 'border: 1px solid #ced4da;'
            }, 500)
        }  
    }

    function setNameSchool(e) {
      localStorage.setItem('name', 'IAmAtSchool')
      window.location.reload()
    }
</script>

<style>
    #nameInput {
        font-size: 2rem;
    }
</style>

{#if !localStorageMount}
  <div style="display: block;" id="nameModal" class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <div class="d-flex flex-column">
              <h5 class="modal-title">Cześć. Dobrze, że jesteś!</h5>
              <small>Widzimy Cię tutaj po raz pierwszy...</small>
          </div>
        </div>
        <div class="modal-body">
          <div class="form-group">
              <label for="exampleInputEmail1">Podaj nam swoje imię</label>
              <input type="text" class="form-control pl-2" id="nameInput" aria-describedby="emailHelp" placeholder="Jan">
              <small id="emailHelp" class="form-text text-muted">Będzie przechowywane w pamięci urządzenia i posłuży do indywidualnej personalizacji strony.</small>
          </div>
        </div>
        <div class="modal-footer">
          <button on:click={setNameSchool} type="button" class="btn btn-secondary">Jestem w szkole</button>
          <button on:click={setName} type="button" class="btn btn-primary">Zapisz</button>
        </div>
      </div>
    </div>
  </div>
{/if}