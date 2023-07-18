import { getById } from '../utilities';
import { Mazes, MazeCoords, Maze } from './dataMazes';


export function mazes_solve(e: HTMLInputElement): void {
	console.log('solve me ' + e.parentElement?.id);
	if (e.parentElement == null) {
		return;
	}


	let clickCoords: MazeCoords | null = {
		Row: parseInt(e.parentElement.getAttribute('row') ?? ''),
		Col: parseInt(e.parentElement.getAttribute('col') ?? '')
	};

	console.log(clickCoords);

	var mazes_form = getById("MazesForm");
	if (mazes_form == null) {
		return;
	}


	let identifierCoords: MazeCoords | null = stringToCoord(mazes_form.getAttribute('identifier'));
	let startCoords: MazeCoords | null = stringToCoord(mazes_form.getAttribute('start'));
	let finishCoords: MazeCoords | null = stringToCoord(mazes_form.getAttribute('finish'));


	if (cellsEqual(identifierCoords, clickCoords)) { // If a lit cell was clicked.
		identifierCoords = null;
	} else if (cellsEqual(startCoords, clickCoords)) {
		startCoords = null;
	} else if (cellsEqual(finishCoords, clickCoords)) {
		finishCoords = null;
	} else if (identifierCoords == null) {	// If an unlit cell was clicked.
		identifierCoords = clickCoords;
	} else if (startCoords == null) {
		startCoords = clickCoords;
	} else if (finishCoords == null) {
		finishCoords = clickCoords;
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
			let aoeu1 = getById(`cell_${iRow}_${iCol}`);
			let aoeuDiv: HTMLDivElement = <HTMLDivElement>aoeu1.firstChild;

			aoeu1.classList.remove('identifier', 'start', 'finish');
			if (cellsEqual(cellCoords, identifierCoords)) {
				aoeu1.classList.add('identifier');
				aoeuDiv.innerHTML = 'm';
			} else if (cellsEqual(cellCoords, startCoords)) {
				aoeu1.classList.add('start');
				aoeuDiv.innerHTML = 's';
			} else if (cellsEqual(cellCoords, finishCoords)) {
				aoeu1.classList.add('finish');
				aoeuDiv.innerHTML = 'f';
			} else {
				aoeuDiv.innerHTML = '&nbsp;';
			}


			aoeu1.classList.remove('wall-right');
			aoeu1.classList.remove('wall-bottom');

			if (maze) {
				//console.log(maze);

				let dick = maze.Cells[iRow][iCol];
				if (dick.Right) {
					aoeu1.classList.add('wall-right');
				}
				if (dick.Bottom) {
					aoeu1.classList.add('wall-bottom');
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
