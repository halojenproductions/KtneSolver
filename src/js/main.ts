import '../scss/styles.scss';
import * as _bootstrap from 'bootstrap';
import { renderClearButton } from './utilities';
import { setupPassword } from './password/setupPassword';
import { setupKeypad } from './keypad/setupKeypad';
import { renderKeypad } from './keypad/renderKeypad';

// Basic wires

// Button

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
