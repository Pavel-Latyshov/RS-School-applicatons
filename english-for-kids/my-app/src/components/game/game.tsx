import React, { useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import gameArr from '../game-state';
import starsArr from '../start-state';
import winArr from '../winState';
import css from './game.module.css';

const Game = ({ item, wordCheck, setWordCheck, shuffleArr, setStars, checkLength }: any) => {
  useEffect(() => {
    const cardId = document.getElementById(`${item[1][0]}`);
    const cardCheckHandler = () => {
      setStars(true);
      if (cardId?.id === wordCheck) {
        if (gameArr.length === 0) {
          cardId?.classList.add('events_none');
          for (let i = 0; i < shuffleArr.length; i++) {
            if (shuffleArr[i] === wordCheck) {
              shuffleArr.splice(i, 1);
              for (let i = 0; i < shuffleArr.length; i++) {
                gameArr.push(shuffleArr[i]);
              }
            }
          }
          setWordCheck(`${gameArr[0]}`);
          const audio = new Audio(`./souns/${gameArr[0]}.mp3`);
          const correctAudio = new Audio(`./souns/positive.wav`);
          correctAudio.play();
          const wordPlay = () => {
            audio.play();
          };
          starsArr.push('yellow');
          winArr.push('correct');
          setTimeout(wordPlay, 2000);
          setStars(false);
        } else {
          cardId?.classList.add('events_none');
          for (let i = 0; i < gameArr.length; i++) {
            if (gameArr[i] === wordCheck) {
              gameArr.splice(i, 1);
            }
          }
          setWordCheck(`${gameArr[0]}`);
          // const audio = new Audio(`./souns/${gameArr[0]}.mp3`)
          const correctAudio = new Audio(`./souns/positive.wav`);
          correctAudio.play();
          const wordPlay = () => {
            const audio = new Audio(`./souns/${gameArr[0]}.mp3`);
            audio.play();
          };
          setTimeout(wordPlay, 1500);
          starsArr.push('yellow');
          winArr.push('correct');
          setStars(false);
        }
      } else {
        const wrongAudio = new Audio(`./souns/error.mp3`);
        wrongAudio.play();
        starsArr.push('empty');
        setStars(false);
        setTimeout(setStars(true), 1);
      }
    };
    cardId?.addEventListener('click', cardCheckHandler);

    return () => cardId?.removeEventListener('click', cardCheckHandler);
  });
  return (
    <div className={css.game_wrapper}>
      <div id={item[1][0]} className={css.game_card}>
        <img src={`${item[0]}`} alt="#" />
      </div>
    </div>
  );
};

export default Game;
