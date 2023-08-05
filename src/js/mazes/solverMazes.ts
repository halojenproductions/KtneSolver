import { getById, icon } from '../utilities';
import { Mazes, MazeCoords, Maze } from './dataMazes';


export function mazes_solve(e: HTMLInputElement | undefined): void {
	var mazes_form = getById("MazesForm");
	if (mazes_form == null) {
		return;
	}

	let clickCoords: MazeCoords | null;
	let identifierCoords: MazeCoords | null;
	let startCoords: MazeCoords | null;
	let finishCoords: MazeCoords | null;

	if (e == undefined) {
		// Reset button was clicked.
		clickCoords = null;
		identifierCoords = null;
		startCoords = null;
		finishCoords = null;
	} else {
		clickCoords = {
			Row: parseInt(e?.parentElement?.parentElement?.getAttribute('row') ?? ''),
			Col: parseInt(e?.parentElement?.parentElement?.getAttribute('col') ?? '')
		};
		identifierCoords = stringToCoord(mazes_form.getAttribute('identifier'));
		startCoords = stringToCoord(mazes_form.getAttribute('start'));
		finishCoords = stringToCoord(mazes_form.getAttribute('finish'));
	}

	if (cellsEqual(clickCoords, identifierCoords)) { // If a lit cell was clicked.
		identifierCoords = null;
	} else if (cellsEqual(clickCoords, startCoords)) {
		startCoords = null;
	} else if (cellsEqual(clickCoords, finishCoords)) {
		finishCoords = null;
	} else if (identifierCoords == null) {	// If an unlit cell was clicked.
		identifierCoords = clickCoords;
	} else if (startCoords == null) {
		startCoords = clickCoords;
	} else if (finishCoords == null) {
		finishCoords = clickCoords;
	} else {
		startCoords = clickCoords; // Moveable start position (i.e. current position).
	}

	mazes_form.setAttribute('identifier', coordToString(identifierCoords));
	mazes_form.setAttribute('start', coordToString(startCoords));
	mazes_form.setAttribute('finish', coordToString(finishCoords));

	// Identify maze.
	let maze: Maze | null = identifyMaze(identifierCoords);

	// Set all the things!
	for (let iRow = 0; iRow < 6; iRow++) {
		for (let iCol = 0; iCol < 6; iCol++) {
			let cellCoords: MazeCoords = { Row: iRow, Col: iCol };
			let tdCell = getById(`cell_${iRow}_${iCol}`);
			let divContainer: HTMLDivElement = <HTMLDivElement>tdCell.firstChild;
			let divOverlay: HTMLDivElement = <HTMLDivElement>divContainer.firstChild;
			let svgSymbol: SVGElement = <SVGElement>divContainer.lastChild;
			let svgIcon: SVGElement = icon("")

			tdCell.classList.remove('identifier', 'start', 'finish');

			if (cellsEqual(cellCoords, identifierCoords)) {
				tdCell.classList.add('identifier');
				divOverlay.innerHTML = 'M';
				svgIcon = icon("circle");
			} else if (cellsEqual(cellCoords, startCoords)) {
				tdCell.classList.add('start');
				divOverlay.innerHTML = 'S';
				svgIcon = icon("square-fill");

			} else if (cellsEqual(cellCoords, finishCoords)) {
				tdCell.classList.add('finish');
				divOverlay.innerHTML = 'F';
				svgIcon = icon("triangle-fill");
			} else {
				divOverlay.innerHTML = '&nbsp;';
			}
			svgSymbol.replaceWith(svgIcon);

			// Clear all walls.
			mazes_form.classList.remove('identified');
			tdCell.classList.remove('identified', 'wall-top', 'wall-right', 'wall-bottom', 'wall-left');

			if (maze) {
				mazes_form.classList.add('identified');

				// Set outer perimeter.
				if (iRow == 0) {
					tdCell.classList.add('wall-top');
				}
				if (iRow == 5) {
					tdCell.classList.add('wall-bottom');
				}
				if (iCol == 0) {
					tdCell.classList.add('wall-left');
				}
				if (iCol == 5) {
					tdCell.classList.add('wall-right');
				}

				// Set inner walls.
				let mazeCell = maze.Cells[iRow][iCol];
				if (mazeCell.Right) {
					tdCell.classList.add('wall-right');
				}
				if (mazeCell.Bottom) {
					tdCell.classList.add('wall-bottom');
				}
			}
		}
	}
}

function cellsEqual(A: MazeCoords | null, B: MazeCoords | null) {
	return A?.Row == B?.Row && A?.Col == B?.Col;
}

function identifyMaze(co: MazeCoords | null): Maze | null {
	return Mazes.find(m =>
		m.Dots.find(c =>
			cellsEqual(c, co)
		)
	) ?? null;
}

function stringToCoord(s: string | null): MazeCoords | null {
	if (s === '' || s == null) {
		return null;
	}
	let parts: Array<string> = s.split(',');
	let row: number = parseInt(parts[0]);
	let col: number = parseInt(parts[1]);
	if (isNaN(row) || isNaN(col)) {
		return null;
	}
	return new MazeCoords(row, col);
}

function coordToString(co: MazeCoords | null): string {
	if (co === null) {
		return "";
	} else {
		return `${co.Row},${co.Col}`;
	}
}
