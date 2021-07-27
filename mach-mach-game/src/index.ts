import { startGameFunc } from './start-game/start';
import { settingsFunc } from './settings';
import { router } from './router';
import { registerFunc } from './register-src/register';
import { cancelFunc } from './register-src/cancel';
import './style/index.scss';
import './indexDB';
import { userState } from './types/state';

cancelFunc();
registerFunc();
router();
settingsFunc();
startGameFunc();
