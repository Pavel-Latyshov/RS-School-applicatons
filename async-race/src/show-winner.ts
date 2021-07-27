import winnersArr from "./winners-array"

const showWinner = async () => {
    const showWinnerWrapper: HTMLElement = document.querySelector('.show_winner')
    // console.log(Number(winnersArr[0][0]));
    const response = await fetch(`http://127.0.0.1:3000/garage/${Number(winnersArr[0][0])}`, {
        method: "GET"
    });
    const data = await response.json();
    console.log(data);
    
        
    showWinnerWrapper.innerText = `${data.name} WINS FIRST (${winnersArr[0][1]})`
}
export default showWinner