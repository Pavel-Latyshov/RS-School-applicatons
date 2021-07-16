import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import gameArr from '../game-state';
import useLoginPass from '../login-pass';
import { PushSets } from '../sets-push';
import starsArr from '../start-state';
import css from './admin-header.module.css';

const AdminHeader = ({ setLogFlag }: any) => {
  const history = useHistory();

  const logOut = () => {
    setLogFlag(true);
    history.push('/');
  };
  const wordsAllert = () => {
    alert('Выберите категорию');
  };
  return (
    <div className={css.admin_wrapper}>
      <NavLink to="/admin">
        <div>categories</div>
      </NavLink>
      <NavLink to="/admin">
        <div onClick={wordsAllert}>words</div>
      </NavLink>

      <div onClick={logOut}>log out</div>
    </div>
  );
};

export default AdminHeader;
