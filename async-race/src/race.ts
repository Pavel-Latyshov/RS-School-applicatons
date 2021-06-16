import AnimateCar from "./car-animation";
import GetWinners from "./get-winners";
import RaceReset from "./race-reset";

const race = () => {
    const raceBtn: HTMLElement = document.querySelector('.race_btn')
    const raceBtnHandler = async () => {
        const carsArray: Array<HTMLElement> = Array.from(document.querySelectorAll('.unit_car'))
        // console.log(carsArray);
        
        carsArray.forEach(async (element: HTMLElement) => {
            const response = await fetch(`http://127.0.0.1:3000/engine?id=${element.id}&status=started`, {
                method: 'GET'
            })
            const data = await response.json()
            raceBtn.style.pointerEvents = 'none'
            AnimateCar(data, element.id)
        });
        RaceReset()
    }
    raceBtn.addEventListener('click', raceBtnHandler)
}
export default race