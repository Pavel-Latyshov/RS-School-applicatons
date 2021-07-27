import React, { useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import gameArr from '../game-state';
import starsArr from '../start-state';
import css from './result-component.module.css';

const ResultComponent = ({ checkLength, starsClear }: any) => {
  const mistackes: any = [];
  starsArr.map((i: any) => {
    if (i === 'empty') {
      mistackes.push(i);
    }
  });
  let result = 'positive';
  if (starsArr.includes('empty')) {
    result = 'negative';
  }
  const resultAudio = new Audio(`./souns/${result}_sound.wav`);

  const resultPlay = () => {
    resultAudio.play();
  };
  resultPlay();

  const history = useHistory();
  setTimeout(() => {
    history.push('/');
    starsClear();
  }, 2000);
  return (
    <div className={css.result_wrapper}>
      <div className={css.text}>Mistakes: {mistackes.length}</div>
      <img src={`./images/${result}_result.svg`} alt="" />
    </div>
  );
};

export default ResultComponent;
