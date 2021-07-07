import React, { useEffect, useState } from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';
import gameArr from '../game-state';
import css from './burger.module.css'
const BurgerComponent = ({dataJson, setFlag}: any) => {
    // links

    let [link, setLink]=useState('/')

    // const linkFunck =()=> {
    //     setLink(window.location.pathname)
        
    //     console.log(link);
    // }
    

    // links


    const clearGameArr = () => {
        return gameArr.splice(0, gameArr.length)
    }

    const linksNamesArray = [];
    for (let key of Object.keys(dataJson.sets)) {
        linksNamesArray.push(key) 
    }
    // console.log(linksNamesArray);
    const singleLink = linksNamesArray.map((item: any) => {
        return (<NavLink to={item}>
            <div  className={link===`/${item}` ?  css.red : undefined} >{item}</div>
        </NavLink>)
    })

    

        return (  
            <div className={css.burger}>
                <NavLink to={`/`}>
                    <div className={link==='/' ? css.red : undefined} >menu</div>
                </NavLink>
                {singleLink}
            </div>            
        )
    
}

export default BurgerComponent