import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import gameArr from '../game-state';
import useLoginPass from '../login-pass';
import { PushSets } from '../sets-push';
import starsArr from '../start-state';
import css from './admin-header.module.css'
const AdminHeader = ({ hideNav }: any) => {

    return (

        <div className={css.admin_wrapper}>
            <NavLink to={'/categories'}>
                <div>
                    categories
                </div>
            </NavLink>
            <NavLink to={'/words'}>
                <div>
                    words
                </div>
            </NavLink>
            <NavLink to={'/logout'}>
                <div>
                    log out
                </div>
            </NavLink>
        </div>

    )
}

export default AdminHeader