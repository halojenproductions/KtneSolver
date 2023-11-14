import { morse_solve } from './solverMorse';
import { buttonDeselect } from '../utilities';


export function setupMorse(): void {
	Array.from(document.querySelectorAll("#Morse form .btn")).forEach((element) => {
		element.addEventListener("click", buttonDeselect);
		element.addEventListener("click", () => setTimeout(morse_solve));
	});
	// Hook up the clear button so it solves after clearing, thus hiding the solution.
	document.querySelector("#Morse button[type='reset']")
	?.addEventListener("click", () => setTimeout(morse_solve));
}

