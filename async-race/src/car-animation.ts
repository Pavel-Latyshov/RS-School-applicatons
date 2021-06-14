import RaceState from "./race-state";
import winnersArr from "./winners-array";
const AnimateCar = (res: any, id: string) => {
    const singleCar: HTMLElement = document.querySelector(`.single__car_${id}`);
    const unitStart: HTMLElement = document.querySelector(`.start_${id}`)
      const stopEngine: HTMLElement = document.querySelector(`.stop_${id}`);
    const checkIfCrash = async (id: string, status: string) => {
        const response = await fetch(`http://127.0.0.1:3000/engine?id=${id}&status=${status}`, {
            method: 'GET'
        })
        return response
    }
    RaceState[id] = {};
    RaceState[id].driveStatus = 0;
    RaceState[id].isCarStoped = false;
    const duration = res.distance / res.velocity;
    const start = performance.now();
    checkIfCrash(id, 'drive').then((item: any) => {
        RaceState[id].driveStatus = item?.status;
    });
    requestAnimationFrame(function animate(time) {
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) timeFraction = 1;
        const progress = timeFraction;
        singleCar.style.left = `${progress * 85}%`;
        unitStart.style.backgroundColor = 'rgb(13, 238, 13)'
        if (RaceState[id].isCarStoped !== true && RaceState[id].driveStatus !== 500) {
            stopEngine.style.backgroundColor = 'darkred'
            unitStart.style.pointerEvents = 'none';
            if (timeFraction < 1) requestAnimationFrame(animate);
        } else if (RaceState[id].driveStatus === 500) {
            unitStart.style.pointerEvents = 'none';
            unitStart.style.backgroundColor = 'darkgreen';
            stopEngine.style.backgroundColor = 'red'
            singleCar.style.transform = 'rotate(-40deg)';
        }
        if (timeFraction === 1) {
            unitStart.style.pointerEvents = 'all';
              unitStart.style.backgroundColor = 'darkgreen';
              stopEngine.style.backgroundColor = 'red'
              console.log(res, id);
              let num = 500/res.velocity

              winnersArr.push([id, num.toFixed(1)])
              console.log(winnersArr);
        }
    });
};
export default AnimateCar;