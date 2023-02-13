import { basic_solve } from './solverBasic';
import { buttonDeselect } from '../utilities';

export function setupBasic(): void {
	Array.from(document.querySelectorAll("#Basic .card-body .btn")).forEach((element) => {
		element.addEventListener("click", buttonDeselect);
		element.addEventListener("click", () => setTimeout(basic_solve));
	});
	// Hook up the clear button so it solves after clearing, thus hiding the solution.
	document.querySelector("#Basic button[type='reset']")
		?.addEventListener("click", () => setTimeout(basic_solve));
}
