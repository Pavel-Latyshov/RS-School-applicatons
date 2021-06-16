import winnersArr from "./winners-array"

const UpdateWinner = async () => {
    let num = Number(winnersArr[0][1])
    console.log(num);
    let result = 0;
    const getWinner = await fetch(`http://127.0.0.1:3000/winners/${winnersArr[0][0]}`, {
        method:"GET"
    })
    const updateWinner = await getWinner.json()
    
    let wins = (Number(updateWinner.wins) + 1)
    console.log(wins);
    if (num < updateWinner.time) {
        result = num
    } else {
        result = Number(updateWinner.time)
    }
    
    const response = await fetch(`http://127.0.0.1:3000/winners/${winnersArr[0][0]}`, {
        method: "PUT",
        body: JSON.stringify({
            wins: `${wins}`,
            time: `${result}`,
        }),
        headers: {
            'Content-Type': 'application/json'
        }

    })
    const data = await response.json();
    return data

}

export default UpdateWinner