import { keypad_solve } from './solverKeypad';

export function setupKeypad(): void {
	Array.from(document.querySelectorAll("#Keypad .btn")).forEach((element) => {
		element.addEventListener("keyup", keypad_solve);
	});
}
