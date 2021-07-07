import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import gameArr from '../game-state';
import starsArr from '../start-state';
import css from './start-game.module.css'
const StartGame = ({ item, shuffleArr, setWordCheck, wordCheck}: any) => {

    const  shuffle = (array: any) => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    shuffle(shuffleArr)
    useEffect(()=> {
      let audioSource = wordCheck
        if (gameArr.length === 0) {
            audioSource = wordCheck
        } else {
            audioSource = gameArr[0]
        }
        const audioPlay = new Audio(`./souns/${wordCheck==='' ? shuffleArr[0] : audioSource}.mp3`)
           const startGameBtnHandler = () => {

               setWordCheck(`${wordCheck==='' ? shuffleArr[0] : audioSource}`)            
               audioPlay.play() 
   
           }
        const startGameBtn = document.querySelector(`.${css.start_game}`)
        startGameBtn?.addEventListener('click', startGameBtnHandler)

        return ()=> startGameBtn?.removeEventListener('click', startGameBtnHandler)

    })


    return (

        <div className={css.start_game_wrapper}>
            {/* <div>{starsArr.length !== 0 ? starsRender : undefined}</div> */}
            <div className={css.start_game}>
                {wordCheck==='' ? 'start game' : 'repeat'}
            </div>
        </div>

    )
}

export default StartGame