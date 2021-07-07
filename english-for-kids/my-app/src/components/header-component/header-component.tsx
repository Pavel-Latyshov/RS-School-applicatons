import React, { useEffect, useState } from 'react';
import BurgerComponent from '../burger-component/burger';
import TrainComponent from '../train-play-component/train-play';
import css from './header-component.module.css'

const HeaderComponent = ({ dataJson, changeFlag, vataJson, setStars, stars, setWordCheck, starsClear, toggleNav, setFlag, flag, hideNav }: any) => {
    return (
        <div className={css.header}>
            <div className={css.header_btns}>
                <div onClick={toggleNav} className={css.burger_btn} ><img src="https://image.flaticon.com/icons/png/512/4974/4974254.png" alt="#" /></div>
                <div onClick={hideNav}  className={css.train_btn}>
                    <TrainComponent changeFlag={changeFlag} vataJson={vataJson} />
                </div>
            </div>
            <div className={flag === true ? css.burger : css.burger_left}>
                <BurgerComponent dataJson={dataJson} setFlag={setFlag} setStars={setStars} stars={stars} setWordCheck={setWordCheck} starsClear={starsClear}/>
            </div>
        </div>
    )
}

export default HeaderComponent