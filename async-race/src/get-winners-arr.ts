import checkWinnersArray from "./check-winners-arr";
import GetWinners from "./get-winners";

const GetWinnersArray = async () => {
    const response = await fetch(`http://127.0.0.1:3000/winners?_limit=10&_page=1&_sort=wins&_order=ASC`)
    const data = await response.json()

    // let checkWinnersArray: any = [];
    for (let i = 0; i < data.length; i++) {
        checkWinnersArray.push(data[i].id)
    }    
    
}

export default GetWinnersArray