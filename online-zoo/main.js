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
            worksWrapper.classList.add('dark')
            worksInfoWrapper.classList.add('light-dark-background')
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
            worksWrapper.classList.remove('dark')
            worksInfoWrapper.classList.remove('light-dark-background')
            toggleFlag = true
        }
    })

    // PETS SLIDER
    let zooLeft = document.querySelector('.zoo-scroller-left')
    let zooRight = document.querySelector('.zoo-scroller-right')
    let zooScroller = document.querySelector('.zoo-scroller')
    let zooNum = document.querySelector('.zoo-animal')
    let petInput = document.querySelector('.zoo-range')
    let zooWidth = document.querySelector('.zoo-img').clientWidth * 4

    let petCounter = 1;
    let offset = 0;
    let zooGap = 30;

    zooRight.addEventListener('click', (e) => {
        petCounter = petInput.value
        if (zooWidth == 840) {
            zooGap = 20
        }
        offset += (zooWidth + zooGap)
        petCounter++
        if (petCounter > 8) {
            petCounter = 1
            petInput.value = petCounter
        } 

        if (petCounter == 1) {
            zooScroller.style.left = 0 + 'px' 
        } else {
            zooScroller.style.left = -((zooWidth + (zooGap * 4)) * (Number(petInput.value))) + 'px'
        }
        zooNum.innerHTML = `0${petCounter}/<span class="zoo-num">08</span>`
        petInput.value = petCounter
    }) 

    zooLeft.addEventListener('click', (e) => {
        petCounter = petInput.value
        
        console.log(zooWidth);
        if (zooWidth == 840) {
            zooGap = 20
        }
        petCounter--
        offset -= (zooWidth + zooGap)
        if (petCounter < 1) {
            petCounter = 8
            petInput.value = petCounter
        }
        petInput.value = petCounter
        zooScroller.style.left = -((zooWidth + (zooGap * 4)) * (Number(petInput.value)-1)) + 'px'
        // zooScroller.style.left = -offset + 'px'
        zooNum.innerHTML = `0${petCounter}/<span class="zoo-num">08</span>`
        
    }) 

    petInput.addEventListener('input', (e) => {
        petCounter = e.target.value
        zooNum.innerHTML = `0${petCounter}/<span class="zoo-num">08</span>`;
            if (zooWidth == 840) {
                zooGap = 20
            }
            let zooInput = (zooWidth + (zooGap * 4)) * (Number(e.target.value) - 1)
            zooScroller.style.left = -zooInput + 'px'
    })
    // PETS SLIDER

    // DEER SLIDER
    const workSlider = document.querySelector('.works-scroller-img')
    const workInput = document.querySelector('.works-input')
    const workAnimal = document.querySelector('.works-animal')
    const workWidth = document.querySelector('.works_scroller-wrapper img').clientWidth

    workInput.addEventListener('input', (e) => {
        workAnimal.innerHTML = `0${e.target.value}/<span class="zoo-num">04</span>`
        workSlider.style.left = -(((e.target.value -1) * workWidth) + (10 * (e.target.value -1))) + 'px'
    })

    // DEER SLIDER


    // TEST SLIDER
    const testSlider = document.querySelector('.test-scroller')
    let testGap = 30
    const testWidth = document.querySelector('.test-item').clientWidth * 2
    const testLeft = document.querySelector('.test-left')
    const testRight = document.querySelector('.test-right')
    const testInput = document.querySelector('.test-range')
    const testAnimal = document.querySelector('.test-animal')

    if (testWidth < 1170) {testGap = 10}

    testInput.addEventListener('input', (e) => {
        testAnimal.innerHTML = `0${e.target.value}/<span class="zoo-num">08</span>`
        testSlider.style.left = -((e.target.value - 1) * (testWidth  + testGap) + (testGap * (e.target.value -1))) + 'px'
    })

    testLeft.addEventListener('click', (e) => {
        if (testInput.value == 1) {
            testInput.value = 8
            testAnimal.innerHTML = `0${testInput.value}/<span class="zoo-num">08</span>`
            testSlider.style.left = -((testInput.value - 1) * (testWidth  + testGap) + (testGap * (testInput.value -1))) + 'px'
        } else {
            testInput.value--
            testAnimal.innerHTML = `0${testInput.value}/<span class="zoo-num">08</span>`
            testSlider.style.left = -((testInput.value - 1) * (testWidth  + testGap) + (testGap * (testInput.value -1))) + 'px'
        }
    })
    testRight.addEventListener('click', (e) => {
        if (testInput.value == 8) {
            testInput.value = 1
            testAnimal.innerHTML = `0${testInput.value}/<span class="zoo-num">08</span>`
            testSlider.style.left = -((testInput.value - 1) * (testWidth  + testGap) + (testGap * (testInput.value -1))) + 'px'
        } else {
            testInput.value++
            testAnimal.innerHTML = `0${testInput.value}/<span class="zoo-num">08</span>`
            testSlider.style.left = -((testInput.value - 1) * (testWidth  + testGap) + (testGap * (testInput.value -1))) + 'px'
        }
    })
    // TEST SLIDER

    // ONLINE SLIDER
    const onlineScroller = document.querySelector('.online-scroller');
    const onlineInput = document.querySelector('.input-range')
    const onlineArr = document.querySelectorAll('.scroller-animal');
    const onlineAnimal = document.querySelector('.actual-animal')
    const onlineInfoArr = document.querySelectorAll('.online-animal-info');
    const onlineLeft = document.querySelector('.online-left')
    const onlineRight = document.querySelector('.online-right')

    const onlineWidth = document.querySelector('.scroller-animal img').clientWidth
    console.log(onlineWidth);

    onlineLeft.addEventListener('click', (e) => {
        onlineInput.value--
        onlineAnimal.innerHTML = `0${onlineInput.value}/<span class="zoo-num">08</span>`

        for (i of onlineArr) {
            i.classList.remove('scroller-animal-panda')
            i.classList.remove('hidden-card')
        }
        for (i of onlineInfoArr) {
            i.classList.add('hidden-fox')
        }

        onlineArr[onlineInput.value - 1].classList.add('scroller-animal-panda')
        onlineInfoArr[onlineInput.value - 1].classList.remove('hidden-fox')
        if (onlineInput.value >= 3){
            onlineArr[onlineInput.value - 3].classList.add('hidden-card')
        }

        if (onlineWidth == 180) {
            if (onlineInput.value == 1) {
                onlineScroller.style.left = 217 + 'px'
            } else if (onlineInput.value == 2) {
                onlineScroller.style.left = 6 + 'px'
            } else if (onlineInput.value == 3) {
                onlineScroller.style.left = -205 + 'px'
            } else if (onlineInput.value == 4) {
                onlineScroller.style.left = -415 + 'px'
            } else if (onlineInput.value == 5) {
                onlineScroller.style.left = -625 + 'px'
            } else if (onlineInput.value == 6) {
                onlineScroller.style.left = -835 + 'px'
            } else if (onlineInput.value == 7) {
                onlineScroller.style.left = -1040 + 'px'
            } else if (onlineInput.value == 8) {
                onlineScroller.style.left = -1252 + 'px'
            }
        } else {  
        if (onlineInput.value == 1) {
            onlineScroller.style.left = 185 + 'px'
        } else if (onlineInput.value == 2) {
            onlineScroller.style.left = 0 + 'px'
        } else if (onlineInput.value == 3) {
            onlineScroller.style.left = -189 + 'px'
        } else if (onlineInput.value == 4) {
            onlineScroller.style.left = -375 + 'px'
        } else if (onlineInput.value == 5) {
            onlineScroller.style.left = -560 + 'px'
        } else if (onlineInput.value == 6) {
            onlineScroller.style.left = -745 + 'px'
        } else if (onlineInput.value == 7) {
            onlineScroller.style.left = -930 + 'px'
        } else if (onlineInput.value == 8) {
            onlineScroller.style.left = -1117 + 'px'
        }
    }
    })
    onlineRight.addEventListener('click', (e) => {
        onlineInput.value++
        onlineAnimal.innerHTML = `0${onlineInput.value}/<span class="zoo-num">08</span>`

        for (i of onlineArr) {
            i.classList.remove('scroller-animal-panda')
            i.classList.remove('hidden-card')
        }
        for (i of onlineInfoArr) {
            i.classList.add('hidden-fox')
        }

        onlineArr[onlineInput.value - 1].classList.add('scroller-animal-panda')
        onlineInfoArr[onlineInput.value - 1].classList.remove('hidden-fox')
        if (onlineInput.value >= 3){
            onlineArr[onlineInput.value - 3].classList.add('hidden-card')
        }

        if (onlineWidth == 180) {
            if (onlineInput.value == 1) {
                onlineScroller.style.left = 217 + 'px'
            } else if (onlineInput.value == 2) {
                onlineScroller.style.left = 6 + 'px'
            } else if (onlineInput.value == 3) {
                onlineScroller.style.left = -205 + 'px'
            } else if (onlineInput.value == 4) {
                onlineScroller.style.left = -415 + 'px'
            } else if (onlineInput.value == 5) {
                onlineScroller.style.left = -625 + 'px'
            } else if (onlineInput.value == 6) {
                onlineScroller.style.left = -835 + 'px'
            } else if (onlineInput.value == 7) {
                onlineScroller.style.left = -1040 + 'px'
            } else if (onlineInput.value == 8) {
                onlineScroller.style.left = -1252 + 'px'
            }
        } else {  
        if (onlineInput.value == 1) {
            onlineScroller.style.left = 185 + 'px'
        } else if (onlineInput.value == 2) {
            onlineScroller.style.left = 0 + 'px'
        } else if (onlineInput.value == 3) {
            onlineScroller.style.left = -189 + 'px'
        } else if (onlineInput.value == 4) {
            onlineScroller.style.left = -375 + 'px'
        } else if (onlineInput.value == 5) {
            onlineScroller.style.left = -560 + 'px'
        } else if (onlineInput.value == 6) {
            onlineScroller.style.left = -745 + 'px'
        } else if (onlineInput.value == 7) {
            onlineScroller.style.left = -930 + 'px'
        } else if (onlineInput.value == 8) {
            onlineScroller.style.left = -1117 + 'px'
        }
    }
    })

    onlineInput.addEventListener('input', (e) => {
        onlineAnimal.innerHTML = `0${e.target.value}/<span class="zoo-num">08</span>`
        for (i of onlineArr) {
            i.classList.remove('scroller-animal-panda')
            i.classList.remove('hidden-card')
        }
        for (i of onlineInfoArr) {
            i.classList.add('hidden-fox')
        }
        
        onlineArr[e.target.value - 1].classList.add('scroller-animal-panda')
        onlineInfoArr[e.target.value - 1].classList.remove('hidden-fox')
        if (e.target.value >= 3){
            onlineArr[e.target.value - 3].classList.add('hidden-card')
        }

        if (onlineWidth == 180) {
            if (e.target.value == 1) {
                onlineScroller.style.left = 217 + 'px'
            } else if (e.target.value == 2) {
                onlineScroller.style.left = 6 + 'px'
            } else if (e.target.value == 3) {
                onlineScroller.style.left = -205 + 'px'
            } else if (e.target.value == 4) {
                onlineScroller.style.left = -415 + 'px'
            } else if (e.target.value == 5) {
                onlineScroller.style.left = -625 + 'px'
            } else if (e.target.value == 6) {
                onlineScroller.style.left = -835 + 'px'
            } else if (e.target.value == 7) {
                onlineScroller.style.left = -1040 + 'px'
            } else if (e.target.value == 8) {
                onlineScroller.style.left = -1252 + 'px'
            }
        } else {  
        if (e.target.value == 1) {
            onlineScroller.style.left = 185 + 'px'
        } else if (e.target.value == 2) {
            onlineScroller.style.left = 0 + 'px'
        } else if (e.target.value == 3) {
            onlineScroller.style.left = -189 + 'px'
        } else if (e.target.value == 4) {
            onlineScroller.style.left = -375 + 'px'
        } else if (e.target.value == 5) {
            onlineScroller.style.left = -560 + 'px'
        } else if (e.target.value == 6) {
            onlineScroller.style.left = -745 + 'px'
        } else if (e.target.value == 7) {
            onlineScroller.style.left = -930 + 'px'
        } else if (e.target.value == 8) {
            onlineScroller.style.left = -1117 + 'px'
        }
    }
    })



    


    // ONLINE SLIDER

}

document.addEventListener('DOMContentLoaded', App)