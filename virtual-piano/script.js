const App = () => {

    const piano = document.querySelector('.piano')
    const pianoKeys = document.querySelectorAll('.piano-key')
    const notes = document.querySelector('.btn-notes')
    const letters = document.querySelector('.btn-letters')
    const fullScreen = document.querySelector('.fullscreen')
    let flag = true

    const playAudio = (src) => {
        const audio = new Audio()
        audio.src = src
        audio.currentTime = 0
        audio.play()
    }

    fullScreen.addEventListener('click', () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen()
        } else {
            document.exitFullscreen()
        }
    })

    notes.addEventListener('click', event => {
        event.target.classList.add('btn-active')
        letters.classList.remove('btn-active')
        pianoKeys.forEach((el => {
            el.classList.remove('piano-key-letter')
        }))
    })

    letters.addEventListener('click', event => {
        event.target.classList.add('btn-active')
        notes.classList.remove('btn-active')
        pianoKeys.forEach((el => {
            el.classList.add('piano-key-letter')
        }))
    })

    piano.addEventListener('mousedown', event => {
        flag = false
        if (event.target.classList.contains('piano-key')) {
            const note = event.target.dataset.note
            const src = `assets/audio/${note}.mp3`
            playAudio(src)
            pianoKeys.forEach((el => {
                if (el.classList.contains('piano-key-active')) {
                    el.classList.remove('piano-key-active')
                }
                else if (el.classList.contains('piano-key-active-pseudo')) {
                    el.classList.remove('piano-key-active-pseudo')
                }
            }))
            event.target.classList.add('piano-key-active')
            event.target.classList.add('piano-key-active-pseudo')
        }
    })

    piano.addEventListener('mouseover', event => {
        if (event.target.classList.contains('piano-key') && flag == false) {
            const note = event.target.dataset.note
            const src = `assets/audio/${note}.mp3`
            playAudio(src)
            pianoKeys.forEach(el => {
                if (el.classList.contains('piano-key-active')) {
                    el.classList.remove('piano-key-active')
                } else if (el.classList.contains('piano-key-active-pseudo')) {
                    el.classList.remove('piano-key-active-pseudo')
                }
            })
            event.target.classList.add('piano-key-active-pseudo')
            event.target.classList.add('piano-key-active')
        }

    })

    piano.addEventListener('mouseout', event => {

        event.target.classList.remove('piano-key-active')
    })

    piano.addEventListener('mouseup', event => {
        if (event.target.classList.contains('piano-key')) {
            pianoKeys.forEach((el => {
                el.classList.remove('piano-key-active')
                el.classList.remove('piano-key-active-pseudo')
            }))
        }
    })

    document.addEventListener('mouseup', () => {
        flag = true
    })

    window.addEventListener('keydown', event => {
        pianoKeys.forEach(el => {
            if ((el.dataset.letter == event.code[event.code.length - 1]) && event.repeat === false) {
                if (el.classList.contains('piano-key-active')) {
                    el.classList.remove('piano-key-active')
                }
                const note = el.dataset.note
                const src = `assets/audio/${note}.mp3`
                playAudio(src)
                el.classList.add('piano-key-active')
            }
        });
    })

    window.addEventListener('keyup', event => {
        pianoKeys.forEach(el => {
            if (el.dataset.letter == event.code[event.code.length - 1]) {
                el.classList.remove('piano-key-active')
            }
        });
    })
}

document.addEventListener('DOMContentLoaded', App)