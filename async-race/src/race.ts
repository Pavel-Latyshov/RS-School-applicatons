import AnimateCar from "./car-animation";

const race = () => {
    const raceBtn: HTMLElement = document.querySelector('.race_btn')
    const carsArray: Array<HTMLElement> = Array.from(document.querySelectorAll('.unit_car'))
    const raceBtnHandler = async () => {
        carsArray.forEach(async (element: HTMLElement) => {
            const response = await fetch(`http://127.0.0.1:3000/engine?id=${element.id}&status=started`, {
                method: 'GET'
            })
            const data = await response.json()
            raceBtn.style.pointerEvents = 'none'
            AnimateCar(data, element.id)
        });
    }
    raceBtn.addEventListener('click', raceBtnHandler)
}
export default race