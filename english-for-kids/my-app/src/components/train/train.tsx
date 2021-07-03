import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import css from './train.module.css'
const Train = ({ item }: any) => {
    const flipClass = `${item[1][0]}`
    // useEffect(() =>{
    //     const flipBtnHandler = () => {
    //         console.log(flipClass);
            
    //     }
    //     const flipBtn = document.querySelector(`.${css.train_flip}`)

    //     flipBtn?.addEventListener('click', flipBtnHandler)

    //     return () => flipBtn?.removeEventListener('click', () => {
    //         return 1
    //     })

    // })
    const flipFunc = () => {
        const flipBtn = document.querySelector(`.${flipClass}`)

        const flipBtnHandler = () => {
            
        }

        flipBtn?.addEventListener('click', flipBtnHandler)
    }

    const flipClasses = css.train_flip + ' ' + flipClass

    return (
        <div className={css.train_card}>
            <img src={`${item[0]}`} alt="#" />
            <div className={css.train_panel}>
                <div className={css.train_word}>
                    {item[1][0]}
                </div>
                <div className={flipClasses}>
                    <img src="https://www.svgrepo.com/show/119473/circular-arrow.svg"></img>
                </div>
            </div>
        </div>
    )
}

export default Train