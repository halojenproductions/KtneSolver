import { words_solve } from './solverWords';
import { buttonDeselect, getById } from '../utilities';


export function setupWords(): void {
	Array.from(document.querySelectorAll("#Words form .btn")).forEach((element) => {
		element.addEventListener("click", buttonDeselect);
		element.addEventListener("click", (e) => setTimeout(words_solve, 0, getById((<HTMLLabelElement>e.target).htmlFor)));
	});
	// Hook up the clear button so it solves after clearing, thus hiding the solution.
	document.querySelector("#Words button[type='reset']")
		?.addEventListener("click", () => setTimeout(words_solve));
}
