import { Sequences_solve } from './solverSequences';
import { buttonDeselect } from '../utilities';

export const lineCount: number = 10;

export function setupSequences(): void {
	Array.from(document.querySelectorAll("#Sequences label.btn")).forEach((element) => {
		element.addEventListener("click", buttonDeselect);
		element.addEventListener("click", () => setTimeout(Sequences_solve));
	});

	document.querySelector("#Sequences button[type='reset']")
	?.addEventListener("click", () => setTimeout(Sequences_solve));
}