import '../scss/styles.scss';
import * as _bootstrap from 'bootstrap';
//import * as _utilities from './utilities';
import { setupPassword } from './setupPassword';
import { setupKeypad } from './keypad/setupKeypad';
import { renderKeypad } from './keypad/renderKeypad';

setupPassword();

renderKeypad();
setupKeypad();

