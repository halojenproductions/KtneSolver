import { getById } from '../utilities';
import { Mazes, MazeCoords } from './dataMazes';


export function mazes_solve(e: HTMLInputElement): void {
	console.log('solve me ' + e.parentElement?.id);
	if (e.parentElement == null) {
		return;
	}


	let clickCoords: MazeCoords | null = {
		X: parseInt(e.parentElement.getAttribute('row') ?? ''),
		Y: parseInt(e.parentElement.getAttribute('col') ?? '')
	};

	console.log(clickCoords);

	let identifierCoords: MazeCoords | null = null;
	let startCoords: MazeCoords | null = null;
	let finishCoords: MazeCoords | null = null;



	for (let iRow = 0; iRow < 6; iRow++) {
		for (let iCol = 0; iCol < 6; iCol++) {
			let cellId = `cell_${iRow}_${iCol}`;
			let aoeu = getById(cellId);

			if (aoeu.getAttribute('identifier') == '1') {
				console.log("got an attribute");
				identifierCoords = { X: iRow, Y: iCol };
			}
			if (aoeu.getAttribute('start') == '1') {
				startCoords = { X: iRow, Y: iCol };
			}
			if (aoeu.getAttribute('finish') == '1') {
				finishCoords = { X: iRow, Y: iCol };
			}
		}
	}

	if (checkCells(identifierCoords, clickCoords)) {
		identifierCoords = null;
	} else if (checkCells(startCoords, clickCoords)) {
		startCoords = null;
	} else if (checkCells(finishCoords, clickCoords)) {
		finishCoords = null;
	} else if (identifierCoords == null) {
		identifierCoords = clickCoords;
	} else if (startCoords == null) {
		startCoords = clickCoords;
	} else if (finishCoords == null) {
		finishCoords = clickCoords;
	}

	for (let iRow = 0; iRow < 6; iRow++) {
		for (let iCol = 0; iCol < 6; iCol++) {
			let cellId = `cell_${iRow}_${iCol}`;
			let aoeu1 = getById(cellId);
			let cellCoords: MazeCoords = { X: iRow, Y: iCol };


			aoeu1.setAttribute('identifier', '0');
			aoeu1.setAttribute('start', '0'); // Why the fuck doesn't this work.
			aoeu1.setAttribute('finish', '0'); // Why the fuck doesn't this work.

			if (checkCells(cellCoords, identifierCoords)) {
				aoeu1.setAttribute('identifier', '1');
			} else

				if (checkCells(cellCoords, startCoords)) {
					aoeu1.setAttribute('start', '1');

				} else

					if (checkCells(cellCoords, finishCoords)) {
						aoeu1.setAttribute('finish', '1');
					}
		}
	}
}

function checkCells(A: MazeCoords | null, B: MazeCoords | null) {
	return A?.X == B?.X && A?.Y == B?.Y;
}
