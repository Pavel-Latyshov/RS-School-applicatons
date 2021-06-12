const AnimateCar = (res: any, id: string) => {
    const singleCar: HTMLElement = document.querySelector(`.single__car_${id}`);
    const unitStart: HTMLElement = document.querySelector(`.start_${id}`)
      const stopEngine: HTMLElement = document.querySelector(`.stop_${id}`);
    //   const startEngine: HTMLElement = document.querySelector(`.start__car_${id}`);
    const RaceState: any = {};
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
        unitStart.style.backgroundColor = 'rgb(3, 168, 3)'
        if (RaceState[id].isCarStoped !== true && RaceState[id].driveStatus !== 500) {
            //   startEngine.style.color = 'red';
            unitStart.style.pointerEvents = 'none';
            if (timeFraction < 1) requestAnimationFrame(animate);
        } else if (RaceState[id].driveStatus === 500) {
            //   startEngine.style.color = 'red';
            //   startEngine.style.pointerEvents = 'none';
            unitStart.style.pointerEvents = 'none';
            unitStart.style.backgroundColor = 'darkgreen';
            singleCar.style.transform = 'rotate(-40deg)';
        }
        if (timeFraction === 1) {
            unitStart.style.pointerEvents = 'all';
            //   startEngine.style.pointerEvents = 'all';
              unitStart.style.backgroundColor = 'darkgreen';
            //   GetWinner(res, id);
            //   ConstructWinnerArray();
        }
    });
    //   stopEngine.addEventListener('click', stopEngineHandler);
};
export default AnimateCar;