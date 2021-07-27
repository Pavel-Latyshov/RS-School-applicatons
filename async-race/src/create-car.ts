import getCars from "./get-cars";

const createCar = () => {
    const createText: HTMLInputElement = document.querySelector('.create_text')
    const createColor: HTMLInputElement = document.querySelector('.create_color')
    const createBtn: HTMLElement = document.querySelector('.create_btn');
    const createBtnHandler = async () => {
        const response = await fetch(`http://127.0.0.1:3000/garage`, {
            method: "POST",
            body: JSON.stringify({
                name: createText.value,
                color: createColor.value
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const pushCar = await response.json()
        getCars() 
        return pushCar
    }
    createBtn.addEventListener('click', createBtnHandler)
}

export default createCar

