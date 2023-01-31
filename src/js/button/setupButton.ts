import { button_solve } from './solverButton';
import { buttonDeselect } from '../utilities';

export function setupMissileButton(): void {
	Array.from(document.querySelectorAll("#MissileButton form .btn")).forEach((element) => {
		element.addEventListener("click", buttonDeselect);
		element.addEventListener("click", () => setTimeout(button_solve));
	});
	// Hook up the clear button so it solves after clearing, thus hiding the solution.
	document.querySelector("#MissileButton button[type='reset']")
	?.addEventListener("click", () => setTimeout(button_solve));
}
