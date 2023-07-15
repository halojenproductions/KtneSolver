import { getById } from '../utilities';
import { Mazes } from './dataMazes';

let mazes = Mazes;

console.log(mazes);
console.log(mazes[0].Cells[1][2]);

export function renderMazes(): void {

	var mazes_form = getById("MazesForm");
	mazes_form.classList.add('d-flex');
	mazes_form.classList.add('justify-content-center');

	let mazeTable = document.createElement("table");
	mazeTable.classList.add('table');
	mazeTable.classList.add('table-bordered');
	mazeTable.classList.add('maze-table');

	let mazeBody = document.createElement("tbody");
	mazeBody.classList.add('maze-body');


	for (let iRow = 0; iRow < 6; iRow++) {
		let row = document.createElement("tr");
		row.id = `row_${iRow}`;
		row.classList.add('maze-row');

		for (let iCol = 0; iCol < 6; iCol++) {
			let cell = document.createElement("td");
			cell.id = `cell_${iRow}_${iCol}`;
			cell.classList.add('cell');

			// Corner radii (doesn't work).
			if (iRow == 0 && iCol == 0) {
				cell.classList.add('top-left');
			} else if (iRow == 0 && iCol == 5) {
				cell.classList.add('top-right');
			} else if (iRow == 5 && iCol == 0) {
				cell.classList.add('bottom-left');
			} else if (iRow == 5 && iCol == 5) {
				cell.classList.add('bottom-right');
			}

			cell.setAttribute('row', iRow.toString());
			cell.setAttribute('col', iCol.toString());

			let cellDiv = document.createElement("div");
			cellDiv.classList.add('cell-div');

			cellDiv.innerHTML = '&nbsp;';

			cell.appendChild(cellDiv);
			row.appendChild(cell);
		}
		mazeBody.appendChild(row);
		mazeTable.appendChild(mazeBody);
	}
	mazes_form.appendChild(mazeTable);


}
