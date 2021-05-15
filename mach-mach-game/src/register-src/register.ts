import { userState } from './../types/state';
type handlerType = (e: MouseEvent) => void;
const registerBtn: HTMLElement = document.querySelector('.register_btn');
const registerFrom: HTMLElement = document.querySelector('.register_wrapper');
let registerFlag: boolean = false;

const registerUser: HTMLElement = document.querySelector('.register_user')

const userName: HTMLInputElement = document.querySelector('.input_name')
const userSurname: HTMLInputElement = document.querySelector('.user_surname')
const userEmail: HTMLInputElement = document.querySelector('.user_email')

registerBtn?.addEventListener('click', () => {
  if (registerFlag === true) {
    registerFrom?.classList.add('hidden');
    registerFlag = false;
  } else if (registerFlag === false) {
    registerFrom?.classList.remove('hidden');
    registerFlag = true;
  }
});




const registerUserHandler: handlerType = (e) => {
  e.preventDefault()
  // let element = e.target as HTMLElement
  // element.classList

  // то что выше для класс листа и вся функция хэндлер так должна выглядеть

  userState.name = userName.value;
  userState.surname = userSurname.value;
  userState.email = userEmail.value;

  
  






}

registerUser.addEventListener('click', registerUserHandler)




