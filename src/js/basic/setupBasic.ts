import { basic_solve } from './solverBasic';
import { buttonDeselect } from '../utilities';

export function setupBasicWires(): void {
	Array.from(document.querySelectorAll("#BasicWires .card-body .btn")).forEach((element) => {
		element.addEventListener("click", buttonDeselect);
		element.addEventListener("click", () => setTimeout(basic_solve));
	});
	// Hook up the clear button so it solves after clearing, thus hiding the solution.
	document.querySelector("#BasicWires button[type='reset']")
		?.addEventListener("click", () => setTimeout(basic_solve));
}
