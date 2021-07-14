import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import AdminSingleComponent from '../admin-single-component/admin-single-component';
import gameArr from '../game-state';
import useLoginPass from '../login-pass';
import starsArr from '../start-state';
import css from './admin-component.module.css'
const AdminComponent = ({ dataJson }: any) => {
    const [flag, setFlag] = useState(true)
    const updateFlag = () => {
        if (flag === true) {
            setFlag(false)
        } else {
            setFlag(true)
        }
    }
    const arr = [];
    for (let key of Object.entries(dataJson.sets)) {
        const wordsArr: any = key[1]
        for (let entry of Object.entries(wordsArr)) {
            console.log(entry[0]);
            const wordsLength: any = entry[1];
            const wordsLengthArr = []
            for (let w of Object.entries(wordsLength)) {
                const word: any = w[1]
                wordsLengthArr.push(word[0])
            }
            arr.push([key[0], wordsLengthArr.length, entry[0]])
        }
    }
    
    const renderAdminComponent = arr.map(i => <AdminSingleComponent category={i[0]} words={i[1]} img={i[2]} />)

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
                        <input className={css.input_text} type="text" />
                    </div>
                    <div>choose picture</div>
                    <div className={css.input}>
                        
                        <input type="file" />
                    </div>
                    <div className={css.btns} >
                        <div onClick={updateFlag}>cancel</div>
                        <div>Update</div>
                    </div>
                </div>
            }

        </div>

    )
}

export default AdminComponent