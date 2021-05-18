import Idb from '../indexDB';
import { userState } from './../types/state';
export const registerFunc = () => {
  type handlerType = (e: MouseEvent) => void;
  const registerBtn: HTMLElement = document.querySelector('.register_btn');
  const registerFrom: HTMLElement = document.querySelector('.register_wrapper'); 
  const registerUser: HTMLElement = document.querySelector('.register_user')
  const userName: HTMLInputElement = document.querySelector('.input_name')
  const userSurname: HTMLInputElement = document.querySelector('.user_surname')
  const userEmail: HTMLInputElement = document.querySelector('.user_email')
  const startBtn: HTMLElement = document.querySelector('.start_btn')
  const aboutPage: HTMLElement = document.querySelector('.about_wrapper')
  const scorePage: HTMLElement = document.querySelector('.score_wrapper')
  const settingsPage: HTMLElement = document.querySelector('.settings_wrapper')
  registerBtn?.addEventListener('click', () => {
    registerFrom.classList.remove('hidden')
    aboutPage.classList.add('hidden')
    scorePage.classList.add('hidden')
    settingsPage.classList.add('hidden')
  });
  const registerUserHandler: handlerType = (e) => {
    if (userName.value !== '' && userSurname.value !== '' && userEmail.value !== '' && userName.clientWidth === 291 && userSurname.clientWidth === 291 && userEmail.clientWidth === 291) {
      e.preventDefault()
      userState.name = userName.value;
      userState.surname = userSurname.value;
      userState.email = userEmail.value;
      userState.ssn = userState.ssn + '1'
      Idb.openDb();
      Idb.putObj(userState);
      console.log(userState);
      registerFrom?.classList.add('hidden');
      userName.value = '';
      userSurname.value = '';
      userEmail.value = '';
      startBtn.classList.remove('hidden')
      aboutPage.classList.remove('hidden')
    }
  }
  registerUser.addEventListener('click', registerUserHandler)
}