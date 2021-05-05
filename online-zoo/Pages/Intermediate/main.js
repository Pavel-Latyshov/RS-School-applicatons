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
    let berger = document.querySelector('.berger')
    let visa = document.querySelector('.visa')
    let visaFlag = true
    let toggleFlag = true

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


    // MAP SLIDER
    const mapInput = document.querySelector('.works-input')
    const mapScrollerImg = document.querySelectorAll('.map-scroller-img')
    const mapEagle = document.querySelector('.map-eagle')
    const mapPanda = document.querySelector('.map-panda')
    const mapCroc = document.querySelector('.map-croc')
    const mapMonk = document.querySelector('.map-monk')
    const mapLeft = document.querySelector('.zoo-scroller-left')
    const mapRight = document.querySelector('.zoo-scroller-right')
    const mapCover = document.querySelector('.map-scroller-cover').clientWidth
    const mapScroller = document.querySelector('.map-scroller')
    const mapLink = document.querySelector('.map-link')

    let mapCounter = mapInput.value

    

    mapPanda.addEventListener('click', (e) => {
        mapEagle.classList.remove('map-panda-red')
        mapCroc.classList.remove('map-panda-red')
        mapMonk.classList.remove('map-panda-red')
        mapPanda.classList.add('map-panda-red')
        mapInput.value = 2
        worksAnimal.innerHTML = `0${mapInput.value}/<span class="works-num">08</span>`
        for (i of mapScrollerImg) {
            i.classList.remove('map-scroller-active')
        }
        mapScrollerImg[mapInput.value - 1].classList.add('map-scroller-active')

        mapScroller.style.left = '0px'

        mapLink.setAttribute('href', '../Live-broadcast/index.html')

        

        
    })
    mapMonk.addEventListener('click', (e) => {
        mapEagle.classList.remove('map-panda-red')
        mapCroc.classList.remove('map-panda-red')
        mapPanda.classList.remove('map-panda-red')
        mapMonk.classList.add('map-panda-red')
        mapInput.value = 1
        worksAnimal.innerHTML = `0${mapInput.value}/<span class="works-num">08</span>`
        for (i of mapScrollerImg) {
            i.classList.remove('map-scroller-active')
        }
        mapScrollerImg[mapInput.value - 1].classList.add('map-scroller-active')

        mapScroller.style.left = '0px'

        mapLink.setAttribute('href', '../Live-broadcast-monkey/index.html')
    })
    mapEagle.addEventListener('click', (e) => {
        mapEagle.classList.add('map-panda-red')
        mapCroc.classList.remove('map-panda-red')
        mapPanda.classList.remove('map-panda-red')
        mapMonk.classList.remove('map-panda-red')
        mapInput.value = 4
        worksAnimal.innerHTML = `0${mapInput.value}/<span class="works-num">08</span>`
        for (i of mapScrollerImg) {
            i.classList.remove('map-scroller-active')
        }
        mapScrollerImg[mapInput.value - 1].classList.add('map-scroller-active')

        mapScroller.style.left = '0px'

        mapLink.setAttribute('href', '../Live-broadcast-eagle/index.html')
    })
    mapCroc.addEventListener('click', (e) => {
        mapEagle.classList.remove('map-panda-red')
        mapCroc.classList.add('map-panda-red')
        mapPanda.classList.remove('map-panda-red')
        mapMonk.classList.remove('map-panda-red')
        mapInput.value = 3
        worksAnimal.innerHTML = `0${mapInput.value}/<span class="works-num">08</span>`
        for (i of mapScrollerImg) {
            i.classList.remove('map-scroller-active')
        }
        mapScrollerImg[mapInput.value - 1].classList.add('map-scroller-active')

        mapScroller.style.left = '0px'

        mapLink.setAttribute('href', '../Live-broadcast-croc/index.html')
    })


    mapLeft.addEventListener('click', (e) => {
        mapCounter = mapInput.value
        mapCounter--
        mapInput.value = mapCounter
        if (mapCounter < 1) {
            mapCounter = 8
            mapInput.value = mapCounter
        }

        if (mapCover == 700) {
            if (mapInput.value == 6) {
                mapScroller.style.left = `-120px`
            } else if (mapInput.value == 7) {
                mapScroller.style.left = `-230px`
            } else if (mapInput.value == 8) {
                mapScroller.style.left = `-360px`
            }
        }

        if (mapCover == 700 && mapScroller.style.left != 0) {
            if (mapInput.value == 1) {
                mapScroller.style.left = `0px`
            } 
        }


        if (mapCover == 700 && mapScroller.style.left != 0) {
            if (mapInput.value == 1) {
                mapScroller.style.left = `0px`
            } 
        }
        worksAnimal.innerHTML = `0${mapInput.value}/<span class="works-num">08</span>`
        mapPanda.classList.remove('map-panda-red')
        mapEagle.classList.remove('map-panda-red')
        mapCroc.classList.remove('map-panda-red')
        mapMonk.classList.remove('map-panda-red')

        for (i of mapScrollerImg) {
            i.classList.remove('map-scroller-active')
        }
        if (mapInput.value == 1) {
            mapMonk.classList.add('map-panda-red')
            mapLink.setAttribute('href', '../Live-broadcast-monkey/index.html')
        } else if (mapInput.value == 2) {
            mapPanda.classList.add('map-panda-red')
            mapLink.setAttribute('href', '../Live-broadcast/index.html')
        } else if (mapInput.value == 3) {
            mapCroc.classList.add('map-panda-red')
            mapLink.setAttribute('href', '../Live-broadcast-croc/index.html')
        } else if (mapInput.value == 4) {
            mapEagle.classList.add('map-panda-red')
            mapLink.setAttribute('href', '../Live-broadcast-eagle/index.html')
        }
        mapScrollerImg[mapInput.value - 1].classList.add('map-scroller-active')
        
    })

    mapRight.addEventListener('click', (e) => {
        mapCounter = mapInput.value
        mapCounter++
        mapInput.value = mapCounter
        if (mapCounter > 8) {
            mapCounter = 1
            mapInput.value = mapCounter
        }

        if (mapCover == 700) {
            if (mapInput.value == 6) {
                mapScroller.style.left = `-120px`
            } else if (mapInput.value == 7) {
                mapScroller.style.left = `-230px`
            } else if (mapInput.value == 8) {
                mapScroller.style.left = `-360px`
            }
        }

        if (mapCover == 700 && mapScroller.style.left != 0) {
            if (mapInput.value == 1) {
                mapScroller.style.left = `0px`
            } 
        }

        worksAnimal.innerHTML = `0${mapInput.value}/<span class="works-num">08</span>`
        mapPanda.classList.remove('map-panda-red')
        mapEagle.classList.remove('map-panda-red')
        mapCroc.classList.remove('map-panda-red')
        mapMonk.classList.remove('map-panda-red')

        for (i of mapScrollerImg) {
            i.classList.remove('map-scroller-active')
        }
        if (mapInput.value == 1) {
            mapMonk.classList.add('map-panda-red')
            mapLink.setAttribute('href', '../Live-broadcast-monkey/index.html')
        } else if (mapInput.value == 2) {
            mapPanda.classList.add('map-panda-red')
            mapLink.setAttribute('href', '../Live-broadcast/index.html')
        } else if (mapInput.value == 3) {
            mapCroc.classList.add('map-panda-red')
            mapLink.setAttribute('href', '../Live-broadcast-croc/index.html')
        } else if (mapInput.value == 4) {
            mapEagle.classList.add('map-panda-red')
            mapLink.setAttribute('href', '../Live-broadcast-eagle/index.html')
        }
        mapScrollerImg[mapInput.value - 1].classList.add('map-scroller-active')
    })

    mapScrollerImg.forEach(element => {
        element.addEventListener('click', (e) => {
            mapPanda.classList.remove('map-panda-red')
            mapEagle.classList.remove('map-panda-red')
            mapCroc.classList.remove('map-panda-red')
            mapMonk.classList.remove('map-panda-red')
            for (i of mapScrollerImg) {
                i.classList.remove('map-scroller-active')
            }
            element.classList.add('map-scroller-active')
            for (i = 0; i < mapScrollerImg.length; i++) {
                if (mapScrollerImg[i].className == 'map-scroller-img map-scroller-active') {
                    mapInput.value = (i + 1)
                    worksAnimal.innerHTML = `0${mapInput.value}/<span class="works-num">08</span>`

                    if (i == 0) {
                        mapMonk.classList.add('map-panda-red')
                        mapLink.setAttribute('href', '../Live-broadcast-monkey/index.html')
                    } else if (i == 1) {
                        mapPanda.classList.add('map-panda-red')
                        mapLink.setAttribute('href', '../Live-broadcast/index.html')
                    } else if (i == 2) {
                        mapCroc.classList.add('map-panda-red')
                        mapLink.setAttribute('href', '../Live-broadcast-croc/index.html')
                    } else if (i == 3) {
                        mapEagle.classList.add('map-panda-red')
                        mapLink.setAttribute('href', '../Live-broadcast-eagle/index.html')
                    }
                }
            }
        })
    });


    mapInput.addEventListener('input', (e) => {
        worksAnimal.innerHTML = `0${e.target.value}/<span class="works-num">08</span>`
        mapPanda.classList.remove('map-panda-red')
        mapEagle.classList.remove('map-panda-red')
        mapCroc.classList.remove('map-panda-red')
        mapMonk.classList.remove('map-panda-red')

        for (i of mapScrollerImg) {
            i.classList.remove('map-scroller-active')
        }
        if (e.target.value == 1) {
            mapMonk.classList.add('map-panda-red')
            mapLink.setAttribute('href', '../Live-broadcast-monkey/index.html')
        } else if (e.target.value == 2) {
            mapPanda.classList.add('map-panda-red')
            mapLink.setAttribute('href', '../Live-broadcast/index.html')
        } else if (e.target.value == 3) {
            mapCroc.classList.add('map-panda-red')
            mapLink.setAttribute('href', '../Live-broadcast-croc/index.html')
        } else if (e.target.value == 4) {
            mapEagle.classList.add('map-panda-red')
            mapLink.setAttribute('href', '../Live-broadcast-eagle/index.html')
        }
        mapScrollerImg[e.target.value - 1].classList.add('map-scroller-active')


        if (mapCover == 700) {
            if (e.target.value == 6) {
                mapScroller.style.left = `-120px`
            } else if (e.target.value == 7) {
                mapScroller.style.left = `-230px`
            } else if (e.target.value == 8) {
                mapScroller.style.left = `-360px`
            }
        }

        if (mapCover == 700 && mapScroller.style.left != 0) {
            if (e.target.value == 1) {
                mapScroller.style.left = `0px`
            } 
        }
    })


    // MAP SLIDER
}

document.addEventListener('DOMContentLoaded', App)