import { getById } from '../utilities';
import { Mazes } from './dataMazes';

let mazes = Mazes;

console.log(mazes);
console.log(mazes[0].Cells[1][2]);

export function renderMazes(): void {

	var mazes_form = getById("MazesForm");

	let maze = document.createElement("div");
	maze.classList.add('maze');
	maze.classList.add('justify-content-center');

	for (let iRow = 0; iRow < 6; iRow++) {
		let row = document.createElement("div");
		row.id = `row_${iRow}`;
		row.classList.add('d-flex');
		row.classList.add('justify-content-center');
		row.classList.add('maze-row');

		for (let iCol = 0; iCol < 6; iCol++) {
			let cell = document.createElement("div");
			cell.id = `cell_${iRow}_${iCol}`;
			cell.classList.add('cell');

			// Corner radii
			if (iRow == 0 && iCol == 0) {
				cell.classList.add('top-left');
			} else if (iRow == 0 && iCol == 5) {
				cell.classList.add('top-right');
			}else if (iRow == 5 && iCol == 0){
				cell.classList.add('bottom-left');
			}else if (iRow == 5 && iCol == 5){
				cell.classList.add('bottom-right');
			}



				row.appendChild(cell);
			}
			maze.appendChild(row);
		}
		mazes_form.appendChild(maze);



	}
