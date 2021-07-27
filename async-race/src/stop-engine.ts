import RaceState from "./race-state";

const stopEngine = () => {
    const stopEngineBtn: Array<HTMLElement> = Array.from(document.querySelectorAll('.unit_stop'));
    const stopEngineHandler = async () => {
        const element = event.target as HTMLElement
        const response = await fetch(`http://127.0.0.1:3000/engine?id=${element.id}&status=stopped`, {
            method: 'GET'
        })
        const data = await response.json() 
        RaceState[element.id].isCarStoped = true;
        const singleCar: HTMLElement = document.querySelector(`.single__car_${element.id}`);
        const startEngine: HTMLElement = document.querySelector(`.start_${element.id}`)
        const stopEngine: HTMLElement = document.querySelector(`.stop_${element.id}`);
        startEngine.style.pointerEvents = 'all';
        RaceState[element.id].isCarStoped = true;
        setTimeout(() => { singleCar.style.left = '0'; startEngine.style.backgroundColor = 'darkgreen'; stopEngine.style.backgroundColor = 'red'; singleCar.style.transform = 'rotate(0deg)'
    }, 400);
        return data      
    }
    stopEngineBtn.forEach(element => {
        element.addEventListener('click', stopEngineHandler)
    });
}

export default stopEngine 