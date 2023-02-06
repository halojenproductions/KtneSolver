import { complicated_solve, complicated_solve_many } from './solverComplicated';
import { buttonDeselect, getById } from '../utilities';

export function setupComplicated(): void {
	// Complicated wires.
	Array.from(document.querySelectorAll("#complicated_inputs label.btn")).forEach((element) => {
		element.addEventListener("click", buttonDeselect);
		element.addEventListener("click", (e) => setTimeout(complicated_solve, 0, getById((<HTMLLabelElement>e.target).htmlFor).name));
	});

	Array.from(document.querySelectorAll("#complicated_optional label.btn")).forEach((element) => {
		element.addEventListener("click", buttonDeselect);
		element.addEventListener("click", () => setTimeout(complicated_solve_many));
	});
}