import { constants } from 'buffer';
import { url } from 'inspector';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import css from './train.module.css'
const Train = ({ item }: any) => {
    const flipClass = `${item[1][0]}`
    const imgClass = `${item[1][0]}_img`
    // console.log(imgClass);
    
    let [flipFlag, setFlipFlag] = useState(true)

    useEffect(()=> {
        const flipBtn = document.querySelector(`.${flipClass}`)
        const flipBtnHandler = () => {
            if (flipFlag === true) {
                setFlipFlag(false)
            } else {
                setFlipFlag(true)
            }
        }
        flipBtn?.addEventListener('click', flipBtnHandler)

        return ()=> {
            flipBtn?.removeEventListener('click', flipBtnHandler)
        }

        // return flipBtn?.removeEventListener('click', ()=> {return 1})
    })



    const reverse = item[1][0]
    const reverseFlip = item[1][1]

    const flipFlagChanger = () => {
        // console.log(reverse);
        
        if (flipFlag === true) {
            setFlipFlag(false)
        } else {
            setFlipFlag(true)
        }
    }


    useEffect(()=> {
        const audioPlay = new Audio(item[1][2])
        const imgBtn = document.querySelector(`.${imgClass}`)
        const audioPlayHandler = () => {
            audioPlay.play()
        }

        imgBtn?.addEventListener('click', audioPlayHandler)

        return ()=> {
            imgBtn?.removeEventListener('click', audioPlayHandler)
        }

    })
    


    const flipClasses = css.train_flip + ' ' + flipClass
    return (
        <div className={imgClass}> 
        <div  onMouseLeave={flipFlag===false ? flipFlagChanger : undefined} className={flipFlag ===true ? css.train_card: css.train_card_flip}>
            <img src={`${item[0]}`} alt="#" />
            <div className={css.train_panel}>
                <div className={flipFlag===true ? css.train_word : css.train_word_reverse}>
                    {flipFlag===true ? reverse : reverseFlip}
                </div>
                <div className={flipClasses}>
                    <img className={flipFlag===false ? css.hidden : undefined } src="https://www.svgrepo.com/show/119473/circular-arrow.svg"></img>
                </div>
            </div>
        </div>
        </div>
       
    )
}

export default Train