//import { memory_solve } from './solverMemory';
import { buttonDeselect } from '../utilities';

export function setupMemory(): void {
	Array.from(document.querySelectorAll("#Memory label.btn")).forEach((element) => {
		element.addEventListener("click", buttonDeselect);
		//element.addEventListener("click", () => setTimeout(memory_solve));
	});

	// document.querySelector("#Memory button[type='reset']")
	// ?.addEventListener("click", () => setTimeout(memory_solve));
}