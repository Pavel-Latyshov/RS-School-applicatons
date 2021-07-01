import React, { useEffect } from 'react';
import BurgerComponent from '../burger-component/burger';
import css from './header-component.module.css'
const HeaderComponent = ({dataJson, changeFlag}: any) => {

//   useEffect(() => {
//     const mainCover = document.querySelector('main_cover')
//     mainCover?.addEventListener('click', ()=> {
//       return 1
//     })
//     return () => mainCover?.removeEventListener('click', ()=> {
//       return 1
//     } )
//   })

    return (
        <div onClick={changeFlag} className={css.header}>
            <div className={css.burger_btn}><img src="https://image.flaticon.com/icons/png/512/4974/4974254.png" alt="#"/></div>
        <BurgerComponent dataJson={dataJson}/>
        </div>
    )
}

export default HeaderComponent