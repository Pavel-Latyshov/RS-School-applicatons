import { router } from './router';
import { registerFunc } from './register-src/register';
import { cancelFunc } from './register-src/cancel';
import './style/index.scss';
import './indexDB';



cancelFunc()
registerFunc()
router()
