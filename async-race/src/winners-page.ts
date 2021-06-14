import GaragePage from "./garage-page"

const Winners = () => {
    const winnersBtn: HTMLElement = document.querySelector('.winner_btn')
    const headerContainer: HTMLElement = document.querySelector('.header_input__container')
    const garageContainer: HTMLElement = document.querySelector('.garage_wrapper')
    const headerWrapper: HTMLElement = document.querySelector('.header_wrapper')
    const winnersWrapper: HTMLElement = document.querySelector('.winners_wrapper')

    const winnersBtnHandler = () => {
        headerContainer.classList.add('hidden')
        garageContainer.classList.add('hidden')
        winnersWrapper.classList.remove('hidden')
    }
    winnersBtn.addEventListener('click', winnersBtnHandler)
    
}

export default Winners