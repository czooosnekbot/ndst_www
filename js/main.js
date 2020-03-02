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
            jang: document.querySelector('#b-2-jang'),
            jpol: document.querySelector('#b-2-jpol'),
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
            jang: document.querySelector('#c-2-jang'),
            jpol: document.querySelector('#c-2-jpol'),
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
	buttons.subjects.second.jang.addEventListener('click', function () {
        containers.subjects.second.jang.style.display = 'flex'
        containers.allContent.style.background = colors.gray3
    })
    buttons.subjects.second.jpol.addEventListener('click', function () {
        containers.subjects.second.jpol.style.display = 'flex'
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

const showTipInfo = function () {
    setTimeout(function () {
        console.log('caio')
        $("#infoModal").modal('toggle')
    }, 1)
}
showTipInfo()