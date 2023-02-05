import '../scss/styles.scss';
import * as _bootstrap from 'bootstrap';
import { renderClearButton } from './utilities';
import { setupPassword } from './password/setupPassword';
import { setupKeypad } from './keypad/setupKeypad';
import { renderKeypad } from './keypad/renderKeypad';
import { setupMissileButton } from './button/setupButton';
import { setupKnobs } from './knobs/setupKnobs';
import { renderKnobs } from './knobs/renderKnobs';

// Basic wires

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

// Wire Sequences

// Mazes

// Password
renderClearButton('Password');
setupPassword();

//Knobs
renderClearButton('Knobs');
renderKnobs();
setupKnobs();