import { memory_solve } from './solverMemory';
import { buttonDeselect, getById } from '../utilities';

export function setupMemory(): void {
	Array.from(document.querySelectorAll("#Memory label.btn")).forEach((element) => {
		element.addEventListener("click", buttonDeselect);
		element.addEventListener("click",(e) => setTimeout(memory_solve, 0, getById((<HTMLLabelElement>e.target).htmlFor)));
	});

	 document.querySelector("#Memory button[type='reset']")
	 ?.addEventListener("click", () => setTimeout(memory_solve));
}