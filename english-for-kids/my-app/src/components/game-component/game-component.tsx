import React, { useState } from 'react';
import Game from '../game/game';
import Stars from '../stars-component/stars';
import StartGame from '../start-game/start-game';
import starsArr from '../start-state';
import Train from '../train/train';
import css from './game-component.module.css'
const GameComponent = ({ item, vataJson, wordCheck, setWordCheck }: any) => {
    const imageSrc = Object.entries(item[1]);
    const imageNames: any = imageSrc[0][1]
    const imageArr: any = [];
    const shuffleArr: any = [];

    for (let keys of Object.entries(imageNames)) {
        imageArr.push(keys)
    }
    if (vataJson === true) {
        starsArr.splice(0, starsArr.length)
    }
    imageArr.forEach((element: any) => {
        shuffleArr.push(element[1][0])
    });


    let [stars, setStars] = useState(true)
    const gameRender = imageArr.map((item: any) => {
        if (vataJson === true) {
            return <Train item={item} />
        } else {
            return (
                <Game shuffleArr={shuffleArr} setWordCheck={setWordCheck} wordCheck={wordCheck} item={item} setStars={setStars} />
            )
        }
    })
    return (
        <div>
            <div>{vataJson === false ? <StartGame shuffleArr={shuffleArr} setWordCheck={setWordCheck} wordCheck={wordCheck} /> : undefined}</div>
            
            {vataJson ===false ? <Stars stars={stars} setStar={setStars} /> : undefined}
            
            <div className={css.main_cards__wrapper}>
                {gameRender}</div>
        </div>
    )
}

export default GameComponent