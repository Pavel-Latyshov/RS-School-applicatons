import RaceState from "./race-state"
import winnersArr from "./winners-array"

const RaceReset = () => {
    const resetBtn: HTMLElement = document.querySelector('.reset_btn')
    const carsArray: Array<HTMLElement> = Array.from(document.querySelectorAll('.unit_car'))
    const raceBtn:HTMLElement = document.querySelector('.race_btn')
    const resetBtnHandler = () => {
        carsArray.forEach(async (element: HTMLElement) => {
            const response = await fetch(`http://127.0.0.1:3000/engine?id=${element.id}&status=started`, {
                method: 'GET'
            })
            const data = await response.json()
            RaceState[element.id].isCarStoped = true;
            const singleCar: HTMLElement = document.querySelector(`.single__car_${element.id}`);
            const startEngine: HTMLElement = document.querySelector(`.start_${element.id}`)
            const stopEngine: HTMLElement = document.querySelector(`.stop_${element.id}`);
            startEngine.style.pointerEvents = 'all';
            RaceState[element.id].isCarStoped = true;
            setTimeout(() => {
                singleCar.style.left = '0'; startEngine.style.backgroundColor = 'darkgreen'; stopEngine.style.backgroundColor = 'red'; singleCar.style.transform = 'rotate(0deg)'
            }, 400);
            raceBtn.style.pointerEvents = 'all'

        });
        winnersArr.splice(0, winnersArr.length);           
    }
    resetBtn.addEventListener('click', resetBtnHandler)
}

export default RaceReset