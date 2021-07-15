import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { createPost } from '../../redux/actions';
import gameArr from '../game-state';
import useLoginPass from '../login-pass';
import { PushSets } from '../sets-push';
import starsArr from '../start-state';
import css from './admin-single-component.module.css'
const AdminSingleComponent = ({ category, words, img, user }: any) => {
    const dispatch = useDispatch()
    const [cardName, setCardName] = useState(null as any)
    const [cardImg, setCardImg] = useState(null as any)

    const cardNameHandler = (e: any) => {
        setCardName(e.target.value)

    }
    const cardImgHandler = (e: any) => {
        let file = e.target.files[0]
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            const newSrc = reader.result;
            setCardImg(newSrc)
        }
    }

    const body = {
        set: cardName,
        image: cardImg,
        user_id: user
    }


    const updateCard = async (e: any) => {

        PushSets.getSets(user).then(res=> {
            res.map((i: any) => {
                if (i.set === category) {
                    const setId: any = i._id
                    const body = {
                        _id: setId,
                        set: cardName,
                        image: cardImg,
                        user_id: user
                    }
                    PushSets.updateSets(body, user, setId)

                    PushSets.getSetWords(user, category).then(res=>{
                        // console.log(res);
                        res.map((item: any)=> {
                            if(item.set_id===category) {
                                const wordBody = {
                                    image: `${item.image}`,
                                    word: `${item.word}`,
                                    translation: `${item.translation}`,
                                    sound: `${item.sound}`,
                                    set_id: `${cardName}`,
                                    user_id: `${user}`
                                }
                                console.log(wordBody);
                                
                                PushSets.pushSetWords(wordBody, user, setId).then(uck=>{

                                    dispatch(createPost(user))
                                })

                            }
                        })
                    })

                }
            })
            setTimeout(()=>{
                dispatch(createPost(user))
            }, 0)  
        })
        updateFlag()
    }


    const [flag, setFlag] = useState(true)
    const updateFlag = () => {
        if (flag === true) {
            setFlag(false)
        } else {
            setFlag(true)
        }
    }
    return (
        <div>
            {
                flag === true ?
                    <div className={css.single_admin}>
                        <div>Category: {category} </div>
                        <img src={img} alt="#" />
                        <div className={css.words} >Words: {words} </div>
                        <div className={css.btns} >
                            <div onClick={updateFlag}>Update</div>
                            <NavLink to={`/${category}admin`}>
                            <div>Add words</div>
                            </NavLink>
                        </div>
                    </div>
                    :
                    <div className={css.new_category} >
                        <div>
                            Category name
            <input onChange={cardNameHandler} className={css.input_text} type="text" />
                        </div>
                        <div>choose picture</div>
                        <div className={css.input}>
                            <input onChange={cardImgHandler} type="file" />
                        </div>
                        <div className={css.btns} >
                            <div onClick={updateFlag}>cancel</div>
                            <div  onClick={updateCard}>update</div>
                        </div>
                    </div>
            }
        </div>

    )
}

export default AdminSingleComponent