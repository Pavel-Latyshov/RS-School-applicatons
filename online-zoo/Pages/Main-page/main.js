const App = () => {
    let a = document.querySelectorAll('.header-link')
    let logo = document.querySelector('.logo-wrapper')
    let header = document.querySelector('.header-wrapper')
    let toggle = document.querySelector('.view-btn')
    let toggleBall = document.querySelector('.view-ball')
    let toggleFlag = true

    toggle.addEventListener('click', () => {
        if (toggleFlag == true) {
            a.forEach(element => {
                element.classList.add('logo-active')
            });
            logo.classList.add('logo-active')
            toggle.classList.add('view-btn-active')
            toggleBall.classList.add('toggle-active')
            header.classList.add('header-wrapper-active')
            toggleFlag = false
        } else {
            a.forEach(element => {
                element.classList.remove('logo-active')
            });
            logo.classList.remove('logo-active')
            toggle.classList.remove('view-btn-active')
            toggleBall.classList.remove('toggle-active')
            header.classList.remove('header-wrapper-active')
            toggleFlag = true
        }
    })
}

document.addEventListener('DOMContentLoaded', App)