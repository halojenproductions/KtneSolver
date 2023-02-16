import { complicated_solve } from './solverComplicated';
import { buttonDeselect, getById } from '../utilities';

export function setupComplicated(): void {
	Array.from(document.querySelectorAll("#Complicated label.btn")).forEach((element) => {
		element.addEventListener("click", buttonDeselect);
		element.addEventListener("click", (e) => setTimeout(complicated_solve, 0, getById((<HTMLLabelElement>e.target).htmlFor).name));
	});
}