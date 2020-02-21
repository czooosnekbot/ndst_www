buttons = {
    firstClass: document.querySelector('#first-class-button'),
    secondClass: document.querySelector('#second-class-button'),
    allClassSelectButtons: document.querySelectorAll('.class-select'),
}
containers = {
    selectSubject: document.querySelector('#select-subject'),
    firstClassSubjects: document.querySelector('#first-class'),
    secondClassSubjects: document.querySelector('#second-class'),
    allClassSubjects: document.querySelectorAll('.subjects'),
}

const showSubjects = function () {
    buttons.allClassSelectButtons.forEach(function (elem) {
        elem.addEventListener('click', function () {
            containers.allClassSubjects.forEach(function (elem) {
                elem.display = 'none'
            })
            buttons.allClassSelectButtons.forEach(function (elem) {
                elem.className = 'btn btn-secondary btn-other mr-2 btn-lg class-select'
            })
            elem.className = 'btn btn-primary btn-main btn-lg mr-2 btn-lg class-select'
        })
    })
    buttons.firstClass.addEventListener('click', function () {
        containers.selectSubject.style.display = 'block'
        containers.firstClassSubjects.style.display = 'flex'
    })
    buttons.secondClass.addEventListener('click', function () {
        containers.selectSubject.style.display = 'block'
        containers.secondClassSubjects.style.display = 'flex'
    })
}
showSubjects()