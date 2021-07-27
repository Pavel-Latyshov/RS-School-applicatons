import getCars from "./get-cars"
import ColorRandom from "./random-color"
import NameRandom from "./random-name"

const generateCars = () => {
    const generateBtn: HTMLElement = document.querySelector('.generate_btn')
    const generateBtnHandler = async () => {
        for (let i = 0; i < 100; i += 1) {
            const response = await fetch(`http://127.0.0.1:3000/garage`, {
                method: "POST",
                body: JSON.stringify({
                    name: NameRandom(),
                    color: ColorRandom()
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        }
        getCars() 
        return 1
    }
    generateBtn.addEventListener('click', generateBtnHandler)
}

export default generateCars