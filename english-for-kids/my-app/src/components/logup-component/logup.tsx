import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import gameArr from '../game-state';
import useLoginPass from '../login-pass';
import { PushSets } from '../sets-push';
import starsArr from '../start-state';
import css from './logup.module.css'
const Logup= ({ hideNav }: any) => {
    const [regFlag, setRegFlag] = useState(true)
    const history = useHistory()

    const loginValue = useLoginPass('')
    const passValue = useLoginPass('')

    const body = {
        _id: `${loginValue.value}`,
        password: `${passValue.value}`
    }

    const cancelBtnHandler = () => {
        history.push('/')
    }

    const loginFunc = async (e: any) => {
        const response = await fetch(`http://localhost:5000/api/users/${loginValue.value}`, {
            method: "GET",
        })
        const data = await response.json()
        console.log(data);
        if (data === null) {
            alert("WRONG NAME")
        }
        if (data !== null && data.password === passValue.value) {
            history.push('/admin')
            PushSets.pushSets(loginValue.value)
            PushSets.pushWords(loginValue.value)

        } else if (data !== null){
            alert('WRONG PASSWORD')
        }

        return data
    }

    return (

        <div className={css.login_wrapper}>
            <input  {...loginValue} id='name' className={css.name_input} type="text" placeholder='Login' required />
            <input {...passValue} id='password' className={css.name_input} type="text" placeholder='Password' required />
            <div className={css.btn_wrapper}>
                <div onClick={loginFunc}  className={css.btn}>Login</div>
                <div onClick={cancelBtnHandler} className={css.btn} >
                    cancel
                </div>
            </div>

        </div>

    )
}

export default Logup