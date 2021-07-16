import React, { useState } from 'react';
import Game from '../game/game';
import ResultComponent from '../result-component/result-component';
import Stars from '../stars-component/stars';
import StartGame from '../start-game/start-game';
import starsArr from '../start-state';
import Train from '../train/train';
import winArr from '../winState';
import css from './game-component.module.css';

const GameComponent = ({
  item,
  vataJson,
  wordCheck,
  setWordCheck,
  setStars,
  stars,
  starsClear,
  hideNav,
}: any) => {
  const imageSrc = Object.entries(item[1]);
  const imageNames: any = imageSrc[0][1];
  const imageArr: any = [];
  const shuffleArr: any = [];

  for (const keys of Object.entries(imageNames)) {
    imageArr.push(keys);
  }
  if (vataJson === true) {
    starsArr.splice(0, starsArr.length);
  }
  imageArr.forEach((element: any) => {
    shuffleArr.push(element[1][0]);
  });

  const checkLength: number = imageArr.length;

  // console.log(imageArr);

  if (winArr.length === checkLength) {
    console.log('fuuuuuuck');
  }
  // let [stars, setStars] = useState(true)

  const gameRender = imageArr.map((item: any) => {
    if (vataJson === true) {
      return <Train item={item} />;
    }
    return (
      <Game
        shuffleArr={shuffleArr}
        setWordCheck={setWordCheck}
        wordCheck={wordCheck}
        item={item}
        setStars={setStars}
        checkLength={checkLength}
      />
    );
  });
  return (
    <div onClick={hideNav}>
      <div>
        {vataJson === false ? (
          <StartGame shuffleArr={shuffleArr} setWordCheck={setWordCheck} wordCheck={wordCheck} />
        ) : undefined}
      </div>

      {vataJson === false ? <Stars stars={stars} setStar={setStars} /> : undefined}
      <div className={css.main_cards__wrapper}>
        {winArr.length === checkLength ? (
          <ResultComponent checkLength={checkLength} starsClear={starsClear} />
        ) : (
          gameRender
        )}
      </div>
    </div>
  );
};

export default GameComponent;
