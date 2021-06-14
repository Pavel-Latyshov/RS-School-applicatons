const GaragePage = () => {
    const garageBtn: HTMLElement = document.querySelector('.garage_btn')
    const headerContainer: HTMLElement = document.querySelector('.header_input__container')
    const garageContainer: HTMLElement = document.querySelector('.garage_wrapper')
    const winnersWrapper: HTMLElement = document.querySelector('.winners_wrapper')

    const garageBtnHandler = () => {
        headerContainer.classList.remove('hidden')
        garageContainer.classList.remove('hidden')
        winnersWrapper.classList.add('hidden')
    }
    garageBtn.addEventListener('click', garageBtnHandler)
}
export default GaragePage