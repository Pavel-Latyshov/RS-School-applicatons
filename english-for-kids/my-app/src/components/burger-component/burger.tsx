import React, { useEffect } from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';
import gameArr from '../game-state';
import css from './burger.module.css'
const BurgerComponent = ({dataJson, setFlag}: any) => {
    // let flag: boolean = true;
    // useEffect(()=> {
    //     const navBtn = document.querySelector('.header-component_burger_btn__2m5vz img');
    //     const navBtnHandler = () => {
    //         if (flag === true) {
    //             flag = false
    //         } else if (flag === false) {flag = true}
    //         console.log(flag);
                     
    //     }
    //     navBtn?.addEventListener('click', navBtnHandler)
    // })
    const clearGameArr = () => {
        return gameArr.splice(0, gameArr.length)
    }

    const linksNamesArray = [];
    for (let key of Object.keys(dataJson.sets)) {
        linksNamesArray.push(key) 
    }
    // console.log(linksNamesArray);
    const singleLink = linksNamesArray.map((item: any) => {
        return (<NavLink  to={item}>
            <div>{item}</div>
        </NavLink>)
    })

    

        return (  
            <div className={css.burger}>
                <NavLink to={`/`}>
                    <div>menu</div>
                </NavLink>
                {singleLink}
            </div>            
        )
    
}

export default BurgerComponent