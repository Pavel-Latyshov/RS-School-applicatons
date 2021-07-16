import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { createPost, createWordRedux } from '../../redux/actions';
import AdminWord from '../admin-word/admin-word';
import gameArr from '../game-state';
import useLoginPass from '../login-pass';
import { PushSets } from '../sets-push';
import starsArr from '../start-state';
import css from './word-component.module.css'
const AdminWordComponent = ({item, user}: any) => {    
    const dispatch = useDispatch()
    const [flag, setFlag] = useState(true)
    const arr= [];
    const w: any = (Object.values(item[1])[0])
    const adminArr:any = Object.entries(w)
    const updateFlag = () => {
        if (flag === true) {
            setFlag(false)
        } else {
            setFlag(true)
        }
    }
    
    const [cardName, setCardName]=useState(null as any)
    const [cardImg, setCardImg]=useState(null as any)
    const [cardTrans, setCardTrans] = useState(null as any)
    const [cardSound, setCardSound] = useState(null as any)

    const wordTranslateHandler = (e: any) => {
        setCardTrans(e.target.value)
    }

    const wordNameHandler = (e: any) => {
        setCardName(e.target.value)        
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


    const createWord = async (e: any) => {
        console.log(item[0]);
        const catId= item[0]
        
        const body = {
            image: cardImg,
            word: cardName,
            translation: cardTrans,
            sound: cardSound,
            set_id: item[0],
            user_id: user
        }
        

        const response = await fetch(`https://elegant-saucisson-88474.herokuapp.com/api/users/${user}/sets/${catId}/game`, {
                method: "POST",
                body: JSON.stringify(body),
                headers: {
                    'Content-Type': 'application/json'
                }
                
            })
            const data = await response.json()
            console.log(data);
            
            setTimeout(()=>{
                const set: any = item[0]
                dispatch(createWordRedux(user, set))
            }, 0)
            updateFlag()
            return data
        
    }
    


    
    const renderAdmin = adminArr.map((i: any)=>{
        const img = i[0]
        const wordInfo = i[1]
        return <AdminWord img={img} wordInfo={wordInfo} user={user} adminArr={adminArr} /> 
    })
    return (
        <div className={css.single_admin}> 
            {renderAdmin}
            {
                flag === true ?
                    <div className={css.new_category}>
                        create new word
                <img onClick={updateFlag} src="https://svgsilh.com/svg/304947.svg" alt="" />
                    </div>
                    :
                    <div className={css.new_category} >
                    <div>
                        New word
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
                        <div onClick={createWord} >create</div>
                    </div>
                </div>
            }
        </div>
       

    )
}

export default AdminWordComponent