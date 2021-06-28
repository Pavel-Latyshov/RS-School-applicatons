import GetWinners from "./get-winners"
import GetWinnersArray from "./get-winners-arr"
import winnersFlag from "./winners-flag"

const sortWinners = () => {
const wins: HTMLElement = document.querySelector('.info_wins')
const score: HTMLElement = document.querySelector('.info_score')
wins.addEventListener('click', () => {
    winnersFlag.flag = 1
    GetWinners()
})
score.addEventListener('click', () => {
    winnersFlag.flag = 2
    GetWinners()
})


} 
export default sortWinners