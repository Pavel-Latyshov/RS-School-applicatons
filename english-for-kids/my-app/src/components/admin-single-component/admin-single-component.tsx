import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import gameArr from '../game-state';
import useLoginPass from '../login-pass';
import starsArr from '../start-state';
import css from './admin-single-component.module.css'
const AdminSingleComponent= ({category, words, img }: any) => {
    const [flag, setFlag] = useState(true)
    const updateFlag = () => {
        if (flag===true) {
            setFlag(false)
        } else {
            setFlag(true)
        }
    }
    return (
        <div>
            {
                flag===true ? 
        <div className={css.single_admin}>
            <div>Category: {category} </div>
            <img src={img} alt="#"/>
            <div className={css.words} >Words: {words} </div>
            <div className={css.btns} >
                <div onClick={updateFlag}>Update</div>
                <div>Add words</div>
            </div>
        </div>
        :
        <div className={css.single_admin}> fuck
            
        
        </div>

            }
        </div>

    )
}

export default AdminSingleComponent