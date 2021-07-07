import React, { useEffect, useState } from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';
import gameArr from '../game-state';
import starsArr from '../start-state';
import winArr from '../winState';
import css from './burger.module.css'
const BurgerComponent = ({ dataJson, setFlag, setVataJson, setStars, stars, setWordCheck, starsClear }: any) => {



    // links

    let [link, setLink] = useState('')

   
    // const linkFunck =()=> {
    //     console.log(window.location.pathname);
    //     setLink(window.location.pathname)
    //     starsClear()

    // }

    // links

    const linksNamesArray = [];
    for (let key of Object.keys(dataJson.sets)) {
        linksNamesArray.push(key)
    }
    const singleLink = linksNamesArray.map((item: any) => {

        return (<NavLink to={item}>
            <div onClick={starsClear} className={link === `/${item}` ? css.red : undefined} >{item}</div>
        </NavLink>)
    })

    return (
        <div className={css.burger}>
            <NavLink to={`/`}>
                <div onClick={starsClear} className={link === '/' ? css.red : undefined} >menu</div>
            </NavLink>
            {singleLink}
        </div>
    )

}

export default BurgerComponent