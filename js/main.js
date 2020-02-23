buttons = {
    firstClass: document.querySelector('#first-class-button'),
    secondClass: document.querySelector('#second-class-button'),
    allClassSelectButtons: document.querySelectorAll('.class-select'),
    allSubjectsButtons: document.querySelectorAll('.button-subject'),
    subjects: {
        first: {
            aso: document.querySelector('#b-1-aso'),
            eutk: document.querySelector('#b-1-eutk'),
            utk: document.querySelector('#b-1-utk'),
            math: document.querySelector('#b-1-math'),
        },
        second: {
            aso: document.querySelector('#b-2-aso'),
            eutk: document.querySelector('#b-2-eutk'),
            lsk: document.querySelector('#b-2-lsk'),
            dg: document.querySelector('#b-2-dg'),
            wiai: document.querySelector('#b-2-wiai'),
            math: document.querySelector('#b-2-math'),
            books: document.querySelector('#b-2-books'),
        },
    },
}
containers = {
    selectSubject: document.querySelector('#select-subject'),
    firstClassSubjects: document.querySelector('#first-class'),
    secondClassSubjects: document.querySelector('#second-class'),
    allClassSubjects: document.querySelectorAll('.subjects'),
    allMaterials: document.querySelectorAll('.materials'),
    allContent: document.querySelector('.content'),
    mobileNavBarCollapsedInfo: document.querySelector('.nav-bar-collapsed-info'),
    subjects: {
        first: {
            aso: document.querySelector('#c-1-aso'),
            eutk: document.querySelector('#c-1-eutk'),
            utk: document.querySelector('#c-1-utk'),
            math: document.querySelector('#c-1-math'),
        },
        second: {
            aso: document.querySelector('#c-2-aso'),
            eutk: document.querySelector('#c-2-eutk'),
            lsk: document.querySelector('#c-2-lsk'),
            dg: document.querySelector('#c-2-dg'),
            wiai: document.querySelector('#c-2-wiai'),
            math: document.querySelector('#c-2-math'),
            books: document.querySelector('#c-2-books'),
        },
    },
}
colors = {
    gray1: '#061D24',
    gray2: '#303440',
    gray3: '#303C40',
    gray4: '#283635',
}

const showSubjects = function () {

    buttons.allClassSelectButtons.forEach(function (elem) {
        elem.addEventListener('click', function () {
            containers.allClassSubjects.forEach(function (elem) {
                elem.style = 'display: none !important;'
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

const showMaterials = function () {

    buttons.allSubjectsButtons.forEach(function (elem) {
        elem.addEventListener('click', function () {
            containers.allMaterials.forEach(function (elem) {
                elem.style = 'display: none !important;'
            })
            buttons.allSubjectsButtons.forEach(function (elem) {
                elem.className = 'btn btn-secondary btn-other mr-2 btn-lg button-subject'
            })
            elem.className = 'btn btn-primary btn-main btn-lg mr-2 btn-lg button-subject'
            document.querySelector('.nav-bar').className += ' nav-bar-subject-choosed'
            containers.mobileNavBarCollapsedInfo.style.display = 'flex'
            containers.allContent.style.display = 'block'
        })
    })

    containers.mobileNavBarCollapsedInfo.addEventListener('click', function () {
        document.querySelector('.nav-bar').className = 'col-12 col-md-3 h-100 nav-bar'
        containers.mobileNavBarCollapsedInfo.style = 'display: none !important;'
    })
    
    buttons.subjects.first.aso.addEventListener('click', function () {
        containers.subjects.first.aso.style.display = 'flex'
        containers.allContent.style.background = colors.gray1
    })
    buttons.subjects.first.eutk.addEventListener('click', function () {
        containers.subjects.first.eutk.style.display = 'flex'
        containers.allContent.style.background = colors.gray2
    })
    buttons.subjects.first.utk.addEventListener('click', function () {
        containers.subjects.first.utk.style.display = 'flex'
        containers.allContent.style.background = colors.gray3
    })
    buttons.subjects.first.math.addEventListener('click', function () {
        containers.subjects.first.math.style.display = 'flex'
        containers.allContent.style.background = colors.gray4
    })

    buttons.subjects.second.aso.addEventListener('click', function () {
        containers.subjects.second.aso.style.display = 'flex'
        containers.allContent.style.background = colors.gray3
    })
    buttons.subjects.second.eutk.addEventListener('click', function () {
        containers.subjects.second.eutk.style.display = 'flex'
        containers.allContent.style.background = colors.gray2
    })
    buttons.subjects.second.lsk.addEventListener('click', function () {
        containers.subjects.second.lsk.style.display = 'flex'
        containers.allContent.style.background = colors.gray4
    })
    buttons.subjects.second.dg.addEventListener('click', function () {
        containers.subjects.second.dg.style.display = 'flex'
        containers.allContent.style.background = colors.gray1
    })
    buttons.subjects.second.wiai.addEventListener('click', function () {
        containers.subjects.second.wiai.style.display = 'flex'
        containers.allContent.style.background = colors.gray3
    })
    buttons.subjects.second.math.addEventListener('click', function () {
        containers.subjects.second.math.style.display = 'flex'
        containers.allContent.style.background = colors.gray2
    })
    buttons.subjects.second.books.addEventListener('click', function () {
        containers.subjects.second.books.style.display = 'flex'
        containers.allContent.style.background = colors.gray4
    })

}
showMaterials()