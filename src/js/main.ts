import '../scss/styles.scss';
import * as _bootstrap from 'bootstrap';
import { renderClearButton } from './utilities';
import { setupBasic } from './basic/setupBasic';
import { renderBasic } from './basic/renderBasic';
import { setupPassword } from './password/setupPassword';
import { setupKeypad } from './keypad/setupKeypad';
import { renderKeypad } from './keypad/renderKeypad';
import { setupSimon } from './simon/setupSimon';
import { renderSimon } from './simon/renderSimon';
import { setupMissileButton } from './button/setupButton';
import { setupKnobs } from './knobs/setupKnobs';
import { renderKnobs } from './knobs/renderKnobs';
import { setupComplicated } from './complicated/setupComplicated';
import { renderComplicated } from './complicated/renderComplicated';
import { setupMemory } from './memory/setupMemory';
import { renderMemory } from './memory/renderMemory';
import { setupWords } from './words/setupWords';
import { renderWords } from './words/renderWords';

// Basic wires
renderClearButton('Basic');
renderBasic();
setupBasic();

// Button
renderClearButton('MissileButton');
setupMissileButton();

// Keypad
renderClearButton('Keypad');
renderKeypad();
setupKeypad();

// Simon Says
renderClearButton('Simon');
renderSimon();
setupSimon();

// Who's On First
renderClearButton('Words');
renderWords();
setupWords();

// Memory
renderClearButton('Memory');
renderMemory();
setupMemory();

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