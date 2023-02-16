import { simon_solve } from './solverSimon';
import { buttonDeselect } from '../utilities';


export function setupSimon(): void {
	Array.from(document.querySelectorAll("#Simon form .btn")).forEach((element) => {
		element.addEventListener("click", buttonDeselect);
	});

	Array.from(document.querySelectorAll("#Simon .btn")).forEach((element) => {
		element.addEventListener("click", () => setTimeout(simon_solve));
	});

	document.querySelector("#Simon button[type='reset']")
		?.addEventListener("click", () => setTimeout(simon_solve));
}
