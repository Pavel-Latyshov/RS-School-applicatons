import AnimateCar from "./car-animation";

const stopEngine = () => {
    const stopEngineBtn: Array<HTMLElement> = Array.from(document.querySelectorAll('.unit_stop'));

    const stopEngineHandler = async () => {
        const element = event.target as HTMLElement
        const response = await fetch(`http://127.0.0.1:3000/engine?id=${element.id}&status=stopped`, {
            method: 'GET'
        })
        const data = await response.json() 
        console.log(data);
        AnimateCar(data, element.id)
        return data      
    }
    stopEngineBtn.forEach(element => {
        element.addEventListener('click', stopEngineHandler)
    });
}

export default stopEngine 