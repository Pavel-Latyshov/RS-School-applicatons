import AnimateCar from "./car-animation";

const startEngine = () => {
    const startEngineBtn: Array<HTMLElement> = Array.from(document.querySelectorAll('.unit_start'));
    const startEngineHandler = async () => {
        const element = event.target as HTMLElement
        const response = await fetch(`http://127.0.0.1:3000/engine?id=${element.id}&status=started`, {
            method: 'GET'
        })
        const data = await response.json() 
        AnimateCar(data, element.id)
        return data      
    }
    startEngineBtn.forEach(element => {
        element.addEventListener('click', startEngineHandler)
    });
}
export default startEngine