import getCars from "./get-cars"
const selectCar = () => {
    const selectBtn: Array<HTMLElement> = Array.from(document.querySelectorAll('.select_btn'))
    const updateText: HTMLInputElement = document.querySelector('.update_text')
    const updateColor: HTMLInputElement = document.querySelector('.update_color')
    const updateBtn: HTMLElement = document.querySelector('.update_btn')
    const selectBtnHandler = async () => {
        const element = event.target as HTMLElement
        const response = await fetch(`http://127.0.0.1:3000/garage/${element.id}`, {
            method: "GET"
        });
        const data = await response.json();
        console.log(data);
        updateText.value = data.name
        updateColor.value = data.color
        // UPDATE
        const updateCar = async () => {
            const response = await fetch(`http://127.0.0.1:3000/garage/${data.id}`, {
                method: "PUT",
                body: JSON.stringify({
                    name: updateText.value,
                    color: updateColor.value,
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }) 
            const update = await response.json()
            getCars()
            return update            
        }
        updateBtn.addEventListener('click', updateCar)
    }
    selectBtn.forEach(element => {
        element.addEventListener('click', selectBtnHandler)
    });
}

export default selectCar