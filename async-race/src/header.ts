import Garage from './garage';
import generateCars from './generate-cars';

const Header = () => {
  const body: HTMLElement = document.querySelector('body');
  body.innerHTML = `<div class="header_wrapper">
    <div class="header_btn__container">
        <div class="garage_btn">GARAGE</div>
        <div class="winner_btn">WINNERS</div>
    </div>
    <div class="header_input__container">
        <div class="create_container">
            <input type="text" class="create_text" placeholder="CAR NAME">
            <input type="color" class="create_color">
            <div class="create_btn">CREATE</div>
        </div>
        <div class="create_container">
            <input type="text" class="update_text" placeholder="CAR NAME">
            <input type="color" class="update_color">
            <div class="update_btn">UPDATE</div>
        </div>
        <div class="race_reset">
            <div class="race_btn">RACE</div>
            <div class="reset_btn">RESET</div>
            <div class="generate_btn">GENERATE</div>
        </div>
    </div>
</div><div class="garage_wrapper"></div>`;
  Garage();
  generateCars()
};

export default Header;
