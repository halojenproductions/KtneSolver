import { getById, icon } from '../utilities';

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

		// Y axis label.
		let th = document.createElement("th");
		th.classList.add('text-primary');
		th.innerHTML = `${(5 - iRow)}`;
		row.appendChild(th);

		// Maze row cells.
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

			let svgIcon = icon(""); // Blank symbol, will be an actual vector in the solver.
			divContainer.appendChild(svgIcon);

			td.appendChild(divContainer);
			row.appendChild(td);
		}
		mazeBody.appendChild(row);
	}

	// Render footer row (X axis labels).
	// It's an array because it needs blank in the first column.
	let xAxisLabels = ["", "0", "1", "2", "3", "4", "5"];
	let headerRow = document.createElement("tr");
	for (let iCol = 0; iCol < 6 + 1; iCol++) {
		let th = document.createElement("th");
		th.classList.add('text-primary');
		th.innerHTML = xAxisLabels[iCol];
		headerRow.appendChild(th);
	}

	mazeBody.appendChild(headerRow);
	mazeTable.appendChild(mazeBody);
	mazes_form.appendChild(mazeTable);
}
