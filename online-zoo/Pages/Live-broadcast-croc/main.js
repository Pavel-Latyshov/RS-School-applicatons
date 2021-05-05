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


    // ZOO SLIDER
    const videoScroller = document.querySelector('.live-video-more')
    const videoDot = document.querySelectorAll('.live-slider-item')
    const mainVideo = document.querySelector('.main-video')
    console.log(mainVideo.clientWidth);
    const scrollerVideo = document.querySelectorAll('.iframe-cover')

    videoDot.forEach(element => {
        element.addEventListener('click', (e) => {
            for (i of videoDot) {
                i.classList.remove('live-slider-item-hover')
            }
            element.classList.add('live-slider-item-hover')
            for (i = 0; i < videoDot.length; i++) {
                if (videoDot[i].outerHTML == '<div class="live-slider-item live-slider-item-hover"></div>' && mainVideo.clientWidth == 527) {
                    if (i + 1 == 1) {
                        videoScroller.style.left = '0px'
                    } else if (i + 1 == 2) {
                        videoScroller.style.left = '-546px'
                    }  else if (i + 1 == 3) {
                        videoScroller.style.left = '-1090px'
                    }
                } else if (videoDot[i].outerHTML == '<div class="live-slider-item live-slider-item-hover"></div>') {
                    if (i + 1 == 1) {
                        videoScroller.style.left = '0px'
                    } else if (i + 1 == 2) {
                        videoScroller.style.left = '-818px'
                    }  else if (i + 1 == 3) {
                        videoScroller.style.left = '-1630px'
                    }
                }
            }
        })
    })
    
    scrollerVideo.forEach(element => {
        element.addEventListener('click', (e) => {
            let mainVideoSrc = mainVideo.src
            
            mainVideo.src = element.firstElementChild.firstElementChild.src
            
            element.firstElementChild.firstElementChild.src = mainVideoSrc
        })
    })

    // ZOO SLIDER
}

document.addEventListener('DOMContentLoaded', App)