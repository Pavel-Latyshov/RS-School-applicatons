import React, { useEffect, useState } from 'react';
import BurgerComponent from '../burger-component/burger';
import TrainComponent from '../train-play-component/train';
import css from './header-component.module.css'

const HeaderComponent = ({dataJson, changeFlag, vataJson}: any) => {

//   useEffect(() => {
//     const mainCover = document.querySelector('main_cover')
//     mainCover?.addEventListener('click', ()=> {
//       return 1
//     })
//     return () => mainCover?.removeEventListener('click', ()=> {
//       return 1
//     } )
//   })
    let [flag, setFlag] = useState(true)

    // useEffect(()=> {
    //     const burgerBtn = document.querySelector(`.${css.burger_btn}`)
    //     burgerBtn?.addEventListener('click', ()=> {
    //         console.log(1);
            
    //     })
    // })
    const toggleNav = () => {
        if (flag === true) {
            setFlag(false)
        } else {
            setFlag(true)
        }        
    }


    return (
        <div className={css.header}>
            <div className={css.header_btns}>
            <div className={css.burger_btn} onClick={toggleNav}><img src="https://image.flaticon.com/icons/png/512/4974/4974254.png" alt="#"/></div>
            <div className={css.train_btn}>
                <TrainComponent changeFlag={changeFlag} vataJson={vataJson}/>
            </div>
            </div>
            <div className={flag === true ? css.burger : css.burger_left}>
        <BurgerComponent dataJson={dataJson} setFlag={setFlag}/>
            </div>
        </div>
    )
}

export default HeaderComponent