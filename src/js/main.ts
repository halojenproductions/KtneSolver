import '../scss/styles.scss';
import * as _bootstrap from 'bootstrap';
import { renderClearButton } from './utilities';
import { setupBasic } from './basic/setupBasic';
import { setupPassword } from './password/setupPassword';
import { setupKeypad } from './keypad/setupKeypad';
import { renderKeypad } from './keypad/renderKeypad';
import { setupMissileButton } from './button/setupButton';
import { setupKnobs } from './knobs/setupKnobs';
import { renderKnobs } from './knobs/renderKnobs';
import { setupComplicated} from './complicated/setupComplicated';
import { renderComplicated } from './complicated/renderComplicated';

// Basic wires
renderClearButton('Basic');
setupBasic();

// Button
renderClearButton('MissileButton');
setupMissileButton();

// Keypad
renderClearButton('Keypad');
renderKeypad();
setupKeypad();

// Simon Says

// Who's On First

// Memory

// Morse Code

// Complicated Wires
renderClearButton('Complicated');
renderComplicated();
setupComplicated();

// Wire Sequences

// Mazes

// Password
renderClearButton('Password');
setupPassword();

//Knobs
renderClearButton('Knobs');
renderKnobs();
setupKnobs();