const App = () => {
    let a = document.querySelectorAll('.header-link')
    let logo = document.querySelector('.logo-wrapper')
    let header = document.querySelector('.header-wrapper')
    let toggle = document.querySelector('.view-btn')
    let toggleBall = document.querySelector('.view-ball')
    let body = document.querySelector('.body-light')
    let worksWrapper = document.querySelector('.works-wrapper')
    let worksTitle = document.querySelectorAll('.work-title')
    let worksText = document.querySelectorAll('.work-text')
    let worksInfoWrapper = document.querySelector('.works-info-wrapper')
    let worksAnimal = document.querySelector('.works-animal')
    let toggleFlag = true

    let berger = document.querySelector('.berger')
    let visa = document.querySelector('.visa')
    let visaFlag = true

    berger.addEventListener('click', () => {
        if (visaFlag == true) {
            visa.classList.remove('visability')
            visaFlag = false
        } else {
            visa.classList.add('visability')
            visaFlag = true
        }
    })

    toggle.addEventListener('click', () => {
        if (toggleFlag == true) {
            a.forEach(element => {
                element.classList.add('logo-active')
            });
            worksTitle.forEach(element => {
                element.classList.add('light-title')
            }); 
            worksText.forEach(element => {
                element.classList.add('light-text')
            });
            logo.classList.add('logo-active')
            toggle.classList.add('view-btn-active')
            toggleBall.classList.add('toggle-active')
            header.classList.add('header-wrapper-active')
            body.classList.add('dark')
            // worksWrapper.classList.add('dark')
            // worksInfoWrapper.classList.add('light-dark-background')
            toggleFlag = false
        } else {
            a.forEach(element => {
                element.classList.remove('logo-active')
            });
            worksTitle.forEach(element => {
                element.classList.remove('light-title')
            });
            worksText.forEach(element => {
                element.classList.remove('light-text')
            });
            logo.classList.remove('logo-active')
            toggle.classList.remove('view-btn-active')
            toggleBall.classList.remove('toggle-active')
            header.classList.remove('header-wrapper-active')
            body.classList.remove('dark')
            // worksWrapper.classList.remove('dark')
            // worksInfoWrapper.classList.remove('light-dark-background')
            toggleFlag = true
        }
    })
}

document.addEventListener('DOMContentLoaded', App)