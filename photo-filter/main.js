const App = () => {
    let inputs = document.querySelectorAll('.filters input')
    let outputs = document.querySelectorAll('.filters output')
    let reset = document.querySelector('.btn-reset')
    let image = document.querySelector('.editor img')
    let nextBtn = document.querySelector('.btn-next')
    let loadPic = document.querySelector('input[type="file"]')
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d')
    var root = document.querySelector(':root');
    
    
//FILTERS
    let inputChanger = (e) => {
        if (e.target.name == 'blur') {
            outputs[0].value = e.target.value
            root.style.setProperty('--blur', `${outputs[0].value}px`);
            // blurCanvas(outputs[0].value)
            // image.style.filter = `blur(${outputs[0].value}px)`
        } else if (e.target.name == 'invert') {
            outputs[1].value = e.target.value
            root.style.setProperty('--invert', `${outputs[1].value}%`);
            // invertCanvas(outputs[1].value)
        } else if (e.target.name == 'sepia') {
            outputs[2].value = e.target.value
            root.style.setProperty('--sepia', `${outputs[2].value}%`);         
            // sepiaCanvas(outputs[2].value)
        } else if (e.target.name == 'saturate') {
            outputs[3].value = e.target.value
            root.style.setProperty('--saturate', `${outputs[3].value}%`);
            // saturateCanvas(outputs[3].value)
        } else if (e.target.name == 'hue') {
            outputs[4].value = e.target.value
            root.style.setProperty('--hue', `${outputs[4].value}deg`);
            // hueCanvas(outputs[4].value)

        } 
        drawImage()
    }

    inputs.forEach(input => input.addEventListener('input', inputChanger))

    //FILTERS

    // КНОПКА RESET
    reset.addEventListener('click', () => {
        root.style.setProperty('--blur', `${0}px`);
        root.style.setProperty('--invert', `${0}%`);
        root.style.setProperty('--sepia', `${0}%`);
        root.style.setProperty('--saturate', `${100}%`);
        root.style.setProperty('--hue', `${0}deg`);
        for (i of outputs) {
            i.value = 0
        }
        outputs[3].value = 100
        for (i of inputs) {
            if(i.name != 'saturate') {
                i.value = 0
            } else {
                i.value = 100
            }
        }

        blurCanvas(0)
        hueCanvas(0)
        invertCanvas(0)
        saturateCanvas(100)
        sepiaCanvas(0)


    })
    // КНОПКА RESET

    // NEXT BTN
    let counter = 1;
    nextBtn.addEventListener('click', () => {
        loadPic.value = null;
        if (counter > 20) {
            counter = 1
        }
        let date = new Date()
        let hour = date.getHours()
        let time = ''
        if (hour >= 6 && hour < 12) {
            time = 'morning'
        } else if (hour >= 12 && hour < 18) {
            time = 'day'
        } else if (hour >= 18 && hour <= 23) {
            time = 'evening'
        } else if (hour >= 0 && hour < 6) {
            time = 'night'
        }
        if (counter < 10) {
            image.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${time}/0${counter}.jpg`
            counter++
            drawImage()
        } else if (counter <= 20 && counter > 9) {
            image.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${time}/${counter}.jpg`
            counter++
            drawImage()
        } 

    })
    // NEXT BTN

    // LOAD BTN
    
    loadPic.addEventListener('change', (e) => {
        const file = loadPic.files[0]
        const reader = new FileReader()
        reader.onload = () => {

            image.src = reader.result
            drawImage()

        }
        reader.readAsDataURL(file)
    })
    // LOAD BTN

    // CANVAS
    function drawImage() {
        const img = new Image()
        img.setAttribute('crossOrigin', 'anonymos')
        img.src = image.src
        img.onload = function () {
            canvas.width = img.width
            canvas.height = img.height
            const ctx = canvas.getContext('2d')
            ctx.filter = `blur(${outputs[0].value}px) invert(${outputs[1].value}%) sepia(${outputs[2].value}%) saturate(${outputs[3].value}%) hue-rotate(${outputs[4].value}deg`
            ctx.drawImage(img, 0, 0)
        }
    }
    drawImage()
    // CANVAS

    // CANVAS FILTERS
    function blurCanvas (filterStats) {
        ctx.filter = `blur(${filterStats}px)`
        ctx.drawImage(image, 0, 0)
    }
    function invertCanvas (filterStats) {
        ctx.filter = `invert(${filterStats}%)`
        ctx.drawImage(image, 0, 0)
    }
    function sepiaCanvas (filterStats) {
        ctx.filter = `sepia(${filterStats}%)`
        ctx.drawImage(image, 0, 0)
    }
    function saturateCanvas (filterStats) {
        ctx.filter = `saturate(${filterStats}%)`
        ctx.drawImage(image, 0, 0)
    }
    function hueCanvas (filterStats) {
        ctx.filter = `hue-rotate(${filterStats}deg)`
        ctx.drawImage(image, 0, 0)
    }
    // CANVAS FILTERS

    // DOWNLOAD
    let saveBtn = document.querySelector('.btn-save')
    saveBtn.addEventListener('click', (e) => {
        var link = document.createElement('a');
        link.download = 'download.png';
        link.href = canvas.toDataURL();
        link.click()
        link.delete;
    })
    // DOWNLOAD

    // FULLSCREEN
    const fullscreen = document.querySelector('.fullscreen')
    fullscreen.addEventListener('click', function toggleFullScreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
          if (document.exitFullscreen) {
            document.exitFullscreen();
          }
        }
      })
    // FULLSCREEN


}

document.addEventListener('DOMContentLoaded', App)