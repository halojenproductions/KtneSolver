import { keypad_solve } from './solverKeypad';
import { buttonDeselect } from './../utilities';


export function setupKeypad(): void {
	Array.from(document.querySelectorAll("#Keypad form .btn")).forEach((element) => {
		element.addEventListener("click", buttonDeselect);
		element.addEventListener("click", () => setTimeout(keypad_solve));
	});
	// Hook up the clear button so it solves after clearing, thus hiding the solution.
	document.querySelector("#Keypad button[type='reset']")
	?.addEventListener("click", () => setTimeout(keypad_solve));
}
