import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { createPost } from '../../redux/actions';
import gameArr from '../game-state';
import useLoginPass from '../login-pass';
import { PushSets } from '../sets-push';
import starsArr from '../start-state';
import css from './admin-word.module.css'
const AdminWord = ({ img, wordInfo }: any) => {
    const dispatch = useDispatch()
    const [cardName, setCardName] = useState(null as any)
    const [cardImg, setCardImg] = useState(null as any)
    const [cardSound, setCardSound] = useState(null as any)
    const [cardTrans, setCardTrans] = useState(null as any)
    const [flag, setFlag] = useState(true)
    const updateFlag = () => {
        if (flag === true) {
            setFlag(false)
        } else {
            setFlag(true)
        }
    }

    const wordNameHandler = (e: any) => {
        setCardName(e.target.value)

    }
    const wordTranslateHandler = (e: any) => {
        setCardTrans(e.target.value)

    }
    const wordImgHandler = (e: any) => {
        let file = e.target.files[0]
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            const newSrc = reader.result;
            setCardImg(newSrc)
        }
    }
    const wordSoundHandler = (e: any) => {
        let file = e.target.files[0]
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            const newSrc = reader.result;
            setCardSound(newSrc)
        }
    }

    const audio = new Audio(wordInfo[2])
    const playSound = () => {
        audio.play()
    }

    return (
        <div>
            {
                flag === true ?

                    <div className={css.single_admin}>
                        <div>Word: {wordInfo[0]} </div>
                        <div>Translation: {wordInfo[1]} </div>
                        <img src={img} alt="" />
                        <div className={css.btns} >
                            <div onClick={playSound} >Sound</div>
                            <div onClick={updateFlag}>Update</div>
                            <div>Delete</div>
                        </div>
                    </div>
                    :
                    <div className={css.new_category} >
                        <div>
                            word
                        <input onChange={wordNameHandler} className={css.input_text} type="text" />
                        </div>
                        <div>
                            translation
                        <input onChange={wordTranslateHandler} className={css.input_text} type="text" />
                        </div>
                        <div>choose picture</div>
                        <div className={css.input}>
                            <input onChange={wordImgHandler} type="file" />
                        </div>
                        <div>choose sound</div>
                        <div className={css.input}>
                            <input onChange={wordSoundHandler} type="file" />
                        </div>
                        <div className={css.btns} >
                            <div onClick={updateFlag}>cancel</div>
                            <div>update</div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default AdminWord