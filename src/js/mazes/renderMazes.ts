import { getById, icon } from '../utilities';
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

	let xAxisLabels = ["", "0", "1", "2", "3", "4", "5"];
	let headerRow = document.createElement("tr");
	for (let iCol = 0; iCol < 6 + 1; iCol++) {
		let blurg = document.createElement("th");
		blurg.classList.add('text-primary');
		blurg.innerHTML = xAxisLabels[iCol];
		headerRow.appendChild(blurg);
	}

	for (let iRow = 0; iRow < 6; iRow++) {
		let row = document.createElement("tr");
		row.id = `row_${iRow}`;
		row.classList.add('maze-row');

		let th = document.createElement("th");
		th.classList.add('text-primary');
		th.innerHTML = `${(5 - iRow)}`;
		row.appendChild(th);

		for (let iCol = 0; iCol < 6; iCol++) {
			let td = document.createElement("td");
			td.id = `cell_${iRow}_${iCol}`;
			td.classList.add('cell');

			// Corner radii (doesn't work).
			// if (iRow == 0 && iCol == 0) {
			// 	td.classList.add('top-left');
			// } else if (iRow == 0 && iCol == 5) {
			// 	td.classList.add('top-right');
			// } else if (iRow == 5 && iCol == 0) {
			// 	td.classList.add('bottom-left');
			// } else if (iRow == 5 && iCol == 5) {
			// 	td.classList.add('bottom-right');
			// }

			td.setAttribute('row', iRow.toString());
			td.setAttribute('col', iCol.toString());

			let divContainer = document.createElement("div");
			divContainer.classList.add('cell-container');

			let divOverlay = document.createElement("div");
			divOverlay.classList.add('cell-div');

			divContainer.appendChild(divOverlay);

			let svgIcon = icon("");
			divContainer.appendChild(svgIcon);


			td.appendChild(divContainer);
			row.appendChild(td);
		}
		mazeBody.appendChild(row);
	}

	mazeBody.appendChild(headerRow);
	mazeTable.appendChild(mazeBody);
	mazes_form.appendChild(mazeTable);
}
