import { userState } from './types/state';

export const settingsFunc = () => {
  const easy: HTMLElement = document.querySelector('.difficulty_easy');
  const medium: HTMLElement = document.querySelector('.difficulty_medium');
  const hard: HTMLElement = document.querySelector('.difficulty_hard');
  const settingsActive: HTMLElement = document.querySelector('.settings_active');
  const animals: HTMLElement = document.querySelector('.game_animals');
  const nature: HTMLElement = document.querySelector('.game_nature');
  const startContainer: HTMLElement = document.querySelector('.start_game__container');
  const animalsHandler = () => {
    animals.classList.add('settings_active');
    nature.classList.remove('settings_active');
    userState.cards = 'animals';
  };
  const natureHandler = () => {
    animals.classList.remove('settings_active');
    nature.classList.add('settings_active');
    userState.cards = 'nature';
  };
  const easyHandler = () => {
    easy.classList.add('settings_active');
    medium.classList.remove('settings_active');
    hard.classList.remove('settings_active');
    userState.difficulty = 'easy';
    startContainer.classList.add('start_easy')
    startContainer.classList.remove('start_medium')
    startContainer.classList.remove('start_hard')
    startContainer.innerHTML = '';
    for (let i = 1; i <= 8; i++) {
      startContainer.innerHTML += `<div class="game_card" id="${i}"><div class="front animal${i}"></div><div class="back hidden"></div>
      </div><div class="game_card" id="${i}"><div class="front animal${i}"></div><div class="back hidden"></div>
      </div>`
    }
  };
  const mediumHandler = () => {
    easy.classList.remove('settings_active');
    medium.classList.add('settings_active');
    hard.classList.remove('settings_active');
    userState.difficulty = 'medium';

    startContainer.innerHTML = '';
    for (let i = 0; i < 18; i++) {
      if (i < 10) {
        startContainer.innerHTML += `<div class="game_card"></div> <div class="game_card"></div>`
      } else {
        startContainer.innerHTML += `<div class="game_card"></div> <div class="game_card"></div>`
      }
    }
  };

  const hardHandler = () => {
    easy.classList.remove('settings_active');
    medium.classList.remove('settings_active');
    hard.classList.add('settings_active');
    userState.difficulty = 'hard';
    startContainer.innerHTML = '';
    for (let i = 0; i <= 32; i++) {
      startContainer.innerHTML += `<div class="game_card"></div> <div class="game_card"></div>`
    }
  };
  easy.addEventListener('click', easyHandler);
  medium.addEventListener('click', mediumHandler);
  hard.addEventListener('click', hardHandler);
  animals.addEventListener('click', animalsHandler);
  nature.addEventListener('click', natureHandler);
};
