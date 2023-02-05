import { knobs_solve } from './solverKnobs';
import { buttonDeselect } from '../utilities';


export function setupKnobs(): void {
	Array.from(document.querySelectorAll("#Knobs form .btn")).forEach((element) => {
		element.addEventListener("click", buttonDeselect);
		element.addEventListener("click", () => setTimeout(knobs_solve));
	});
	// Hook up the clear button so it solves after clearing, thus hiding the solution.
	document.querySelector("#Knobs button[type='reset']")
	?.addEventListener("click", () => setTimeout(knobs_solve));
}
