import { complicated_solve } from './solverComplicated';
import { buttonDeselect } from '../utilities';

export function setupComplicated(): void {
	Array.from(document.querySelectorAll("#Complicated label.btn")).forEach((element) => {
		element.addEventListener("click", buttonDeselect);
		element.addEventListener("click", () => setTimeout(complicated_solve));
	});

	document.querySelector("#Complicated button[type='reset']")
	?.addEventListener("click", () => setTimeout(complicated_solve));
}