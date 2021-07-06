import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import gameArr from '../game-state';
import css from './start-game.module.css'
const StartGame = ({ item, shuffleArr, setWordCheck, wordCheck}: any) => {

    const  shuffle = (array: any) => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    shuffle(shuffleArr)

    console.log(wordCheck);
    // if(wordCheck ==='') {

    // }
    

    // console.log(shuffleArr[0][1][2]); 
    // console.log(shuffleArr);
    
    
    useEffect(()=> {
      

     const audioPlay = new Audio(`./souns/${wordCheck==='' ? shuffleArr[0] : gameArr[0]}.mp3`)
        const startGameBtnHandler = () => {
            setWordCheck(`${wordCheck==='' ? shuffleArr[0] : gameArr[0]}`)            
            audioPlay.play() 

        }
        const startGameBtn = document.querySelector(`.${css.start_game}`)
        startGameBtn?.addEventListener('click', startGameBtnHandler)

        return ()=> startGameBtn?.removeEventListener('click', startGameBtnHandler)

    })


    return (

        <div className={css.start_game_wrapper}>
            <div className={css.start_game}>
                {wordCheck==='' ? 'start game' : 'repeat'}
            
            </div>
        </div>

    )
}

export default StartGame