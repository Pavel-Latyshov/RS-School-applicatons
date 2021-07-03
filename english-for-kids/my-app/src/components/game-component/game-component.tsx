import React from 'react';
import Train from '../train/train';
import css from './game-component.module.css'
const GameComponent = ({ item, vataJson }: any) => {
    const itemName = item[0];
    const imageSrc = Object.entries(item[1]);
    // console.log(imageSrc);

    const imageNames: any = imageSrc[0][1]
    // console.log(imageNames);
    const imageArr = [];
    for (let keys of Object.entries(imageNames)) {
        // console.log(keys);
        imageArr.push(keys)


    }

    const cardInfo = [];

    


    // console.log(imageNames);


    const gameRender = imageArr.map((item: any)=> {
        console.log(item);
        
        if (vataJson === true) {
            return <Train item = {item}/>

        } else {
            return <div className={css.game_card}>
                <img src={`${item}`} alt="#" /></div>
        }
    })

    return (
        <div>
            <div className={css.main_cards__wrapper}>{gameRender}</div>
        </div>
    )
}

export default GameComponent