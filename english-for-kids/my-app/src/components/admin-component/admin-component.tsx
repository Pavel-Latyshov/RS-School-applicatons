import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { createPost } from '../../redux/actions';
import AdminSingleComponent from '../admin-single-component/admin-single-component';
import gameArr from '../game-state';
import useLoginPass from '../login-pass';
import starsArr from '../start-state';
import css from './admin-component.module.css'
const AdminComponent = ({ dataJson, user }: any) => {
    const dispatch = useDispatch()
    const [flag, setFlag] = useState(true)
    const updateFlag = () => {
        if (flag === true) {
            setFlag(false)
        } else {
            setFlag(true)
        }
    }

    const [cardName, setCardName]=useState(null as any)
    const [cardImg, setCardImg]=useState(null as any)

    const cardNameHandler = (e: any) => {
        setCardName(e.target.value)
        // console.log(cardName);
        
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
    const createCard = async (e: any) => {

        const response = await fetch(`http://localhost:5000/api/users/${user}/sets`, {
                method: "POST",
                body: JSON.stringify(body),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            updateFlag()
            const data = await response.json()
            setTimeout(()=>{
                dispatch(createPost(user))
            }, 0)
            return data
        
    }
     

    const arr = [];
    for (let key of Object.entries(dataJson.sets)) {
        // console.log(key);
        
        const wordsArr: any = key[1]
        for (let entry of Object.entries(wordsArr)) {
            // console.log(entry[0]);
            const wordsLength: any = entry[1];
            const wordsLengthArr = []
            for (let w of Object.entries(wordsLength)) {
                const word: any = w[1]
                wordsLengthArr.push(word[0])
            }
            arr.push([key[0], wordsLengthArr.length, entry[0]])
        }
    }

    const renderAdminComponent = arr.map(i => <AdminSingleComponent category={i[0]} words={i[1]} img={i[2]}  user={user}/>)

    return (

        <div className={css.single_admin}>
            {renderAdminComponent}

            {
                flag === true ?
                    <div className={css.new_category}>
                        create new category
                <img onClick={updateFlag} src="https://svgsilh.com/svg/304947.svg" alt="" />
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
                        <div onClick={createCard} >create</div>
                    </div>
                </div>
            }

        </div>

    )
}

export default AdminComponent