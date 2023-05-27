import { words_solve } from './solverWords';
import { buttonDeselect } from '../utilities';


export function setupWords(): void {
	Array.from(document.querySelectorAll("#Words form .btn")).forEach((element) => {
		element.addEventListener("click", buttonDeselect);
		element.addEventListener("click", () => setTimeout(words_solve));
	});
	// Hook up the clear button so it solves after clearing, thus hiding the solution.
	document.querySelector("#Words button[type='reset']")
	?.addEventListener("click", () => setTimeout(words_solve));
}
