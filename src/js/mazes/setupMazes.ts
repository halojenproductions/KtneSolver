import { mazes_solve } from './solverMazes';
import { buttonDeselect, getById } from '../utilities';

export function setupMazes(): void {
	Array.from(document.querySelectorAll("#Mazes div.cell-div")).forEach((element) => {
		//element.addEventListener("click", buttonDeselect);
		element.addEventListener("click",(e) => setTimeout(mazes_solve, 0,<HTMLLabelElement>e.target));
	});

	 document.querySelector("#Mazes button[type='reset']")
	 ?.addEventListener("click", () => setTimeout(mazes_solve));
}