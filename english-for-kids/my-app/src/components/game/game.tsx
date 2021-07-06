import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import gameArr from '../game-state';
import css from './game.module.css'
const Game = ({ item, wordCheck, setWordCheck, shuffleArr }: any) => {
    // const imageSrc = Object.keys(item[1])[0];

    // console.log(item[1][0]);
    // const cardCheck = document.querySelector(`.${css.game_card}`)

    useEffect(() => {
        const cardId = document.getElementById(`${item[1][0]}`)
        const cardCheckHandler = () => {
            console.log(wordCheck);
            if (cardId?.id === wordCheck) {
                // console.log(true); 
                if (gameArr.length === 0) {
                    cardId?.classList.add('events_none')
                    for (let i = 0; i < shuffleArr.length; i++) {
                        if (shuffleArr[i] === wordCheck) {
                            shuffleArr.splice(i, 1)
                            for (let i = 0; i < shuffleArr.length; i++) {
                                gameArr.push(shuffleArr[i])
                            }
                        }
                    }
                    setWordCheck(`${gameArr[0]}`)
                } else {
                    console.log(gameArr);
                    
                    cardId?.classList.add('events_none')
                    for (let i = 0; i < gameArr.length; i++) {
                        if (gameArr[i] === wordCheck) {
                            gameArr.splice(i, 1)
                        }
                    }
                    setWordCheck(`${gameArr[0]}`)
                }

            } else {
                // console.log(false);  
            }
        }
        cardId?.addEventListener('click', cardCheckHandler)

        return () => cardId?.removeEventListener('click', cardCheckHandler)
    })

    return (

        <div className={css.game_wrapper}>
            <div id={item[1][0]} className={css.game_card}>
                <img src={`${item[0]}`} alt="#" />
            </div>
        </div>

    )
}

export default Game