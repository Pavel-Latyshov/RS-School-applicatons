import Garage from './garage';
import GaragePage from './garage-page';
import generateCars from './generate-cars';
import GetWinners from './get-winners';
import Winners from './winners-page';

const Header = () => {
  const body: HTMLElement = document.querySelector('body');
  body.innerHTML = `<div class="header_wrapper">
    <div class="header_btn__container">
        <div class="garage_btn">GARAGE</div>
        <div class="winner_btn">WINNERS</div>
    </div>

    <div class="winners_wrapper hidden"><div class="winner_unit"><div class="winner_info"><div class="info_num">NUMBER</div><div class="info_car">CAR</div><div class="info_name">NAME</div><div class="info_wins">WINS</div><div class="info_score">BEST TIME</div></div>
    </div>
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
        </div>
        <div class="show_winner"></div>
        
<div class="garage_wrapper"></div>`;
  Garage();
  generateCars()
  Winners()
  GaragePage()
  GetWinners()
};

export default Header;
