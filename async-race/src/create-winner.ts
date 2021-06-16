import createCar from "./create-car"
import winnersArr from "./winners-array";

const createWinner = async () => {
    // const getCarInfo = await fetch(`http://127.0.0.1:3000/garage/${Number(winnersArr[0][0])}`, {
    //     method: "GET"
    // });
    // const carInfo = await getCarInfo.json();
    // console.log(carInfo);
    console.log(winnersArr[0][1]);
    
    const response = await fetch(`http://127.0.0.1:3000/winners`, {
        method: "POST",
        body: JSON.stringify({
            id: Number(winnersArr[0][0]),
            wins: 1,
            time: Number(winnersArr[0][1])
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    
    });
    return response
}

export default createWinner