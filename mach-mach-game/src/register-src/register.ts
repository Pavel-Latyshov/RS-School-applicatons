import Idb from '../indexDB';
import { userState } from './../types/state';
export const registerFunc = () => {
  type handlerType = (e: MouseEvent) => void;
  const registerBtn: HTMLElement = document.querySelector('.register_btn');
  const registerFrom: HTMLElement = document.querySelector('.register_wrapper');
  let registerFlag: boolean = false;
  
  const registerUser: HTMLElement = document.querySelector('.register_user')
  
  const userName: HTMLInputElement = document.querySelector('.input_name')
  const userSurname: HTMLInputElement = document.querySelector('.user_surname')
  const userEmail: HTMLInputElement = document.querySelector('.user_email')
  
  const startBtn: HTMLElement = document.querySelector('.start_btn')
  const aboutPage: HTMLElement = document.querySelector('.about_wrapper')
  
  
  registerBtn?.addEventListener('click', () => {
    aboutPage.classList.add('hidden')
  
    if (registerFlag === true) {
      registerFrom?.classList.add('hidden');
      aboutPage.classList.remove('hidden')
      registerFlag = false;
    } else if (registerFlag === false) {
      registerFrom?.classList.remove('hidden');
      aboutPage.classList.add('hidden')
      registerFlag = true;
    }
  });
  
  
  const registerUserHandler: handlerType = (e) => {
    // let element = e.target as HTMLElement
    // element.classList
  
    // то что выше для класс листа и вся функция хэндлер так должна выглядеть
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
      registerFlag = false;
      userName.value = '';
      userSurname.value = '';
      userEmail.value = '';
  
      startBtn.classList.remove('hidden')
      aboutPage.classList.remove('hidden')
  
    }
    
  }
  
  registerUser.addEventListener('click', registerUserHandler)



}






