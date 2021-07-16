import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { idText } from 'typescript';
import { createPost, createWordRedux } from '../../redux/actions';
import gameArr from '../game-state';
import useLoginPass from '../login-pass';
import { PushSets } from '../sets-push';
import starsArr from '../start-state';
import css from './admin-word.module.css'
const AdminWord = ({ img, wordInfo, user, adminArr }: any) => {
    // console.log(wordInfo);
    
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

    const updateWord = async (e: any) => {
        PushSets.getSetWords(user, wordInfo[3]).then(res => {
            console.log(res);
            res.map((i: any)=> {
                if(i.word===wordInfo[0]) {
                    const body = {
                        _id: i._id,
                        image: cardImg,
                        word: cardName,
                        translation: cardTrans,
                        sound: cardSound,
                        set_id: wordInfo[3],
                        user_id: user
                    }
                    PushSets.pushWord(body, user, wordInfo[3], i._id).then(dis=> {
                        dispatch(createWordRedux(user, cardName))
                    })
                    updateFlag()
                }
            })
            
        })       
    }

    const deleteWord = ()=> {
        PushSets.getSetWords(user, wordInfo[3]).then(res=> {
            res.map((i:any)=> {
                if(i.word===wordInfo[0]){
                    const wordId= i._id
                    PushSets.deleteWord(wordInfo[3], user, wordId).then(res=>{
                        dispatch(createWordRedux(user, cardName))
                    })
                }
            })
        })
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
                            <div onClick={deleteWord} >Delete</div>
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
                            <div onClick={updateWord} >update</div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default AdminWord