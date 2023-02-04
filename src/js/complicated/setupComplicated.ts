import { complicated_solve } from './solverComplicated';
import { complicated_solve_many } from './solverComplicated';
import { buttonDeselect } from '../utilities';

export function setupComplicated(): void {
	// Complicated wires.
	Array.from(document.querySelectorAll("#complicated_inputs .btn")).forEach((element) => {
		element.addEventListener("click", buttonDeselect);
		element.addEventListener("click", (e) => setTimeout(complicated_solve, 0, e));
	});

	Array.from(document.querySelectorAll("#complicated_optional .btn")).forEach((element) => {
		element.addEventListener("click", buttonDeselect);
		element.addEventListener("click", () => setTimeout(complicated_solve_many));
	});

	// document.querySelector("#Complicated button[type='reset']")
	// 	?.addEventListener("click", () => setTimeout(complicated_solve_many));
}