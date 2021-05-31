import { userState } from "../types/state";
export const startGameFunc = () => {
    const startGameBtn: HTMLElement = document.querySelector('.start_btn');
    const aboutPage: HTMLElement = document.querySelector('.about_wrapper');
    const settingsPage: HTMLElement = document.querySelector('.settings_wrapper');
    const scorePage: HTMLElement = document.querySelector('.score_wrapper');
    const startPage: HTMLElement = document.querySelector('.start_game_wrapper');
    const startContainer: HTMLElement = document.querySelector('.start_game__container');
    const gameCard: Array<HTMLInputElement> = Array.from(document.querySelectorAll('.game_card'));
    // type handlerType = (e: MouseEvent) => void;
    const startGameHandler = () => {
        aboutPage.classList.add('hidden');
        settingsPage.classList.add('hidden');
        scorePage.classList.add('hidden');
        startPage.classList.remove('hidden');
        const gameCard: Array<HTMLInputElement> = Array.from(document.querySelectorAll('.game_card'));
        const frontCard: Array<HTMLInputElement> = Array.from(document.querySelectorAll('.front'));

        // Таймер карт
        const showCards = () => {
            frontCard.forEach(element => {
                element.classList.add('hidden');
            });
            gameCard.forEach(element => {
                element.classList.add('game_card_reverse')
            });
        }
        setTimeout(showCards, 1000);
        // Таймер карт

        let counter = 0;
        let idCounter = '';
        const cardHandler = () => {
            if (counter === 0) {
                let element = event.target as HTMLElement
                element.classList.remove('game_card_reverse')
                let card = element.firstChild as HTMLElement
                card.classList.remove('hidden')
                element.classList.add('open')
                idCounter += element.id
                console.log(idCounter);
                counter++                
            } else if (counter > 0) {
                let element = event.target as HTMLElement
                element.classList.remove('game_card_reverse')
                let card = element.firstChild as HTMLElement
                card.classList.remove('hidden')
                element.classList.add('open')
                let open: Array<HTMLInputElement> = Array.from(document.querySelectorAll('.open'));
                console.log(open);
                // let idCounter = '';
                console.log(idCounter);
                open.forEach(element => {
                    idCounter += element.id
                });
                let result = (idCounter[0] === idCounter[1])
                if (result === true && idCounter.length > 0) {
                    gameCard.forEach(element => {
                        element.classList.remove('open')
                        counter = 0
                    });
                    open = []
                    console.log(open);
                    idCounter = ''
                    console.log(idCounter);
                    
                } else if (result === false && idCounter.length > 0){
                    open.forEach(element => {
                        element.classList.add('game_card_reverse')
                        let card = element.firstChild as HTMLElement
                        card.classList.add('hidden')
                        counter = 0
                        idCounter = ''
                    });
                }
            }
        }


        gameCard.forEach(element => {
            element.addEventListener('click', cardHandler)
        });
    };
    startGameBtn.addEventListener('click', startGameHandler);
};
