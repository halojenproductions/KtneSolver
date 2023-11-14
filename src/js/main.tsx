import '../scss/styles.scss';
import * as _bootstrap from 'bootstrap';
import { renderClearButton, getById } from './utilities';

import { setupBasic } from './basic/setupBasic';
import { renderBasic } from './basic/renderBasic';
import { setupMissileButton } from './button/setupButton';
import { setupKeypad } from './keypad/setupKeypad';
import { renderKeypad } from './keypad/renderKeypad';
import { setupSimon } from './simon/setupSimon';
import { renderSimon } from './simon/renderSimon'
import { setupWords } from './words/setupWords';
import { renderWords } from './words/renderWords';
import { setupMemory } from './memory/setupMemory';
import { renderMemory } from './memory/renderMemory';
import { setupMorse } from './morse/setupMorse';
import { renderMorse } from './morse/renderMorse';
import { setupComplicated } from './complicated/setupComplicated';
import { renderComplicated } from './complicated/renderComplicated';
import { setupSequences } from './sequences/setupSequences';
import { renderSequences } from './sequences/renderSequences';
import { setupMazes } from './mazes/setupMazes';
import { renderMazes } from './mazes/renderMazes';
import { setupPassword } from './password/setupPassword';
import { setupKnobs } from './knobs/setupKnobs';
import { renderKnobs } from './knobs/renderKnobs';
import { renderNav } from './nav/renderNav';
import { createRoot } from "react-dom/client";
import Nav from "./nav/Nav";
import MorseModule from './morse/Morse';

// Navigation Menu
//renderNav();
createRoot(getById("Nav")).render(<Nav />);


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
// renderClearButton('Morse');
// renderMorse();
// setupMorse();
createRoot(getById("MorseRoot")).render(<MorseModule />);

// Complicated Wires
renderClearButton('Complicated');
renderComplicated();
setupComplicated();

// Wire Sequences
renderClearButton('Sequences');
renderSequences();
setupSequences();

// Mazes
renderClearButton('Mazes');
renderMazes();
setupMazes();


// Password
renderClearButton('Password');
setupPassword();

//Knobs
renderClearButton('Knobs');
renderKnobs();
setupKnobs();