import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import gameArr from '../game-state';
import starsArr from '../start-state';
import css from './stars.module.css';

const Stars = ({ item, shuffleArr, setWordCheck, wordCheck, stars, setStars }: any) => {
  const starsRender = starsArr.map((item: any) => {
    return (
      <div className={css.star}>
        <img src={`./images/${item}_star.png`} alt="" />
      </div>
    );
  });
  return <div className={css.stars_wrapper}>{stars === false ? starsRender : starsRender}</div>;
};

export default Stars;
