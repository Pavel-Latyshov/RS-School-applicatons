import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import gameArr from '../game-state';
import starsArr from '../start-state';
import css from './stars.module.css'
const Stars = ({ item, shuffleArr, setWordCheck, wordCheck, stars, setStars}: any) => {
    const starsRender = starsArr.map((item:any)=> {
        return (
            <div className={css.star}>
                <img src={`./images/${item}_star.png`} alt=""/>
            </div>
        )

    })
    return (

        <div className={css.stars_wrapper}>
            {/* <div>{starsArr.length !== 0 ? starsRender : undefined}</div> */}
            {stars=== false ? starsRender : starsRender}
            {/* <div>{stars=== true ? starsRender : undefined}</div> */}

        </div>

    )
}

export default Stars