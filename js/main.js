const CDNaddress = 'https://cdn.czooosnek.cloud/files/'

buttons = {
    firstClass: document.querySelector('#first-class-button'),
    secondClass: document.querySelector('#second-class-button'),
    allClassSelectButtons: document.querySelectorAll('.class-select'),
    allSubjectsButtons: document.querySelectorAll('.button-subject'),
    allMaterialsButtons: document.querySelectorAll('.btn-material'),
    downloadButton: document.querySelector('#download-button'),
    viewableMaterials: document.querySelectorAll('.viewable'),
    resizeButton: document.querySelector('#resizeButton'),
    counter: document.querySelector('title'),
    subjects: {
        first: {
            aso1: document.querySelector('#b-1-aso'),
            eutk1: document.querySelector('#b-1-eutk'),
            utk1: document.querySelector('#b-1-utk'),
            math1: document.querySelector('#b-1-math'),
        },
        second: {
            aso2: document.querySelector('#b-2-aso'),
            so2: document.querySelector('#b-2-so'),
            eutk2: document.querySelector('#b-2-eutk'),
            lsk2: document.querySelector('#b-2-lsk'),
            dg2: document.querySelector('#b-2-dg'),
            wiai2: document.querySelector('#b-2-wiai'),
            math2: document.querySelector('#b-2-math'),
            books2: document.querySelector('#b-2-books'),
            jang2: document.querySelector('#b-2-jang'),
            jpol2: document.querySelector('#b-2-jpol'),
            jhisz2: document.querySelector('#b-2-jhisz'),
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
	pdfViewer: document.querySelector('#pdf-viewer'),
    subjects: {
        first: {
            aso1: document.querySelector('#c-1-aso'),
            eutk1: document.querySelector('#c-1-eutk'),
            utk1: document.querySelector('#c-1-utk'),
            math1: document.querySelector('#c-1-math'),
        },
        second: {
            aso2: document.querySelector('#c-2-aso'),
            so2: document.querySelector('#c-2-so'),
            eutk2: document.querySelector('#c-2-eutk'),
            lsk2: document.querySelector('#c-2-lsk'),
            dg2: document.querySelector('#c-2-dg'),
            wiai2: document.querySelector('#c-2-wiai'),
            math2: document.querySelector('#c-2-math'),
            books2: document.querySelector('#c-2-books'),
            jang2: document.querySelector('#c-2-jang'),
            jpol2: document.querySelector('#c-2-jpol'),
            jhisz2: document.querySelector('#c-2-jhisz'),
        },
    },
}

const fetchMaterials = function (which, where) {
    which.forEach(function (elem) {
        const newButton = document.createElement('a')
        newButton.textContent = elem.title
        if (elem.filetype === 'pdf') {
            newButton.id = elem.filename
        } else if (elem.filetype === 'picture') {
            newButton.href = `${CDNaddress}${elem.filename}`
            newButton.setAttribute("data-lightbox", elem.filename)
            newButton.setAttribute("data-title", elem.description)
        } else if (elem.filetype === 'web') {
            newButton.href = elem.filename
            newButton.target = '_blank'
        }
        newButton.className = 'btn btn-material viewable'
        where.appendChild(newButton)
    })
    console.log(`Imported ${which.length} material/s succesfully.`)
}

fetchMaterials(ndst.content.utk1, containers.subjects.first.utk1)
fetchMaterials(ndst.content.aso1, containers.subjects.first.aso1)
fetchMaterials(ndst.content.aso2, containers.subjects.second.aso2)
fetchMaterials(ndst.content.so2, containers.subjects.second.so2)
fetchMaterials(ndst.content.eutk1, containers.subjects.first.eutk1)
fetchMaterials(ndst.content.eutk2, containers.subjects.second.eutk2)
fetchMaterials(ndst.content.math1, containers.subjects.first.math1)
fetchMaterials(ndst.content.math2, containers.subjects.second.math2)
fetchMaterials(ndst.content.dg2, containers.subjects.second.dg2)
fetchMaterials(ndst.content.wiai2, containers.subjects.second.wiai2)
fetchMaterials(ndst.content.lsk2, containers.subjects.second.lsk2)
fetchMaterials(ndst.content.jhis2, containers.subjects.second.jhisz2)
fetchMaterials(ndst.content.jang2, containers.subjects.second.jang2)
fetchMaterials(ndst.content.jpol2, containers.subjects.second.jpol2)

colors = {
    gray1: '#37366B',
    gray2: '#3B4975',
    gray3: '#3B6775',
    gray4: '#366B6A',
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
            document.querySelector('.nav-bar').className = 'col-12 col-md-3 h-100 nav-bar nav-bar-subject-choosed'
            containers.mobileNavBarCollapsedInfo.style.display = 'flex'
            containers.allContent.style.display = 'block'
        })
    })

    containers.mobileNavBarCollapsedInfo.addEventListener('click', function () {
        document.querySelector('.nav-bar').className = 'col-12 col-md-3 h-100 nav-bar'
        containers.mobileNavBarCollapsedInfo.style = 'display: none !important;'
    })
    
    buttons.subjects.first.aso1.addEventListener('click', function () {
        containers.subjects.first.aso1.style.display = 'flex'
        containers.allContent.style.background = colors.gray1
    })
    buttons.subjects.first.eutk1.addEventListener('click', function () {
        containers.subjects.first.eutk1.style.display = 'flex'
        containers.allContent.style.background = colors.gray2
    })
    buttons.subjects.first.utk1.addEventListener('click', function () {
        containers.subjects.first.utk1.style.display = 'flex'
        containers.allContent.style.background = colors.gray3
    })
    buttons.subjects.first.math1.addEventListener('click', function () {
        containers.subjects.first.math1.style.display = 'flex'
        containers.allContent.style.background = colors.gray4
    })

    buttons.subjects.second.aso2.addEventListener('click', function () {
        containers.subjects.second.aso2.style.display = 'flex'
        containers.allContent.style.background = colors.gray3
    })
    buttons.subjects.second.eutk2.addEventListener('click', function () {
        containers.subjects.second.eutk2.style.display = 'flex'
        containers.allContent.style.background = colors.gray2
    })
    buttons.subjects.second.lsk2.addEventListener('click', function () {
        containers.subjects.second.lsk2.style.display = 'flex'
        containers.allContent.style.background = colors.gray4
    })
    buttons.subjects.second.dg2.addEventListener('click', function () {
        containers.subjects.second.dg2.style.display = 'flex'
        containers.allContent.style.background = colors.gray1
    })
    buttons.subjects.second.wiai2.addEventListener('click', function () {
        containers.subjects.second.wiai2.style.display = 'flex'
        containers.allContent.style.background = colors.gray3
    })
    buttons.subjects.second.math2.addEventListener('click', function () {
        containers.subjects.second.math2.style.display = 'flex'
        containers.allContent.style.background = colors.gray2
    })
    // buttons.subjects.second.books2.addEventListener('click', function () {
    //     containers.subjects.second.books2.style.display = 'flex'
    //     containers.allContent.style.background = colors.gray4
    // })
	buttons.subjects.second.jang2.addEventListener('click', function () {
        containers.subjects.second.jang2.style.display = 'flex'
        containers.allContent.style.background = colors.gray3
    })
    buttons.subjects.second.jpol2.addEventListener('click', function () {
        containers.subjects.second.jpol2.style.display = 'flex'
        containers.allContent.style.background = colors.gray2
    })
    buttons.subjects.second.jhisz2.addEventListener('click', function () {
        containers.subjects.second.jhisz2.style.display = 'flex'
        containers.allContent.style.background = colors.gray2
    })
    buttons.subjects.second.so2.addEventListener('click', function () {
        containers.subjects.second.so2.style.display = 'flex'
        containers.allContent.style.background = colors.gray2
    })
}
showMaterials()

const pdfShow = function () {
    const viewable = document.querySelectorAll('.viewable')
    const viewType = '#view=FitH'
    viewable.forEach(function (elem) {
        elem.addEventListener('click', function () {
            const pdfContianer = document.querySelector('.pdfobject')
            if (elem.id != "") {
                pdfContianer.src = `${CDNaddress}${elem.id}${viewType}`
                // buttons.downloadButton.style = 'display: block !important;'
                // buttons.downloadButton.download = elem.id
                // buttons.downloadButton.href = `${CDNaddress}${elem.id}`
                containers.allContent.className = 'col-12 col-md-6 h-100 px-md-3 content'
                containers.pdfViewer.className = 'col-0 col-md-3 h-100 pdfobject-container'
                if ($(window).width() > 700) {
                    buttons.resizeButton.className = 'btn btn-danger btn-lg'
                    buttons.resizeButton.style = `background: ${containers.allContent.style.background} !important;`
                }    
            }
        })
    })
}
pdfShow()

const generateLinksForMobile = function () {
    const viewable = document.querySelectorAll('.viewable')
    if ($(window).width() < 700) {
        viewable.forEach(function (elem) {
            if (elem.id != "") {
                elem.href = `${CDNaddress}${elem.id}`
            }
        })
    }
}
generateLinksForMobile()

const resizePdfView = function () {
    const min = function () {
        buttons.resizeButton.addEventListener('click', function (e) {
            containers.allContent.className = 'col-12 col-md-6 h-100 px-md-3 content'
            containers.pdfViewer.className = 'col-0 col-md-3 h-100 pdfobject-container'
            e.target.innerHTML = '<i class="mr-1 fas fa-angle-double-left"></i> Rozszerz'
            max()
        })
    }
    const max = function () {
        buttons.resizeButton.addEventListener('click', function (e) {
            containers.allContent.className = 'col-0 col-md-0 d-none'
            containers.pdfViewer.className = 'col-0 col-md-9 h-100 pdfobject-container'
            e.target.innerHTML = '<i class="mr-1 fas fa-angle-double-right"></i> Powrót'
            min()
        })
    }
    max()
}
resizePdfView()