import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './single-component-style.module.css'
const SingleComponent = ({item}: any) => {
    const imageSrc = Object.keys(item[1])[0];
    // console.log(item[1]);
    const cardLink = document.querySelector(`.${css.action__card}`);
    const cardLinkHandler = () => {
        
    }
    cardLink?.addEventListener('click', cardLinkHandler)

    return (
        <NavLink to={item[0]}>
        <div className={css.action__card}>{item[0]}
        <img src={process.env.PUBLIC_URL + `${imageSrc}`}alt="#"/></div>
        </NavLink>
    )
}

export default SingleComponent