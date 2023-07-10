import { getById } from '../utilities';

type MazeDot = {
	X: Number;
	Y: Number;
}

class MazeCell {
	Right: Boolean;
	Bottom: Boolean;
	constructor(right: Boolean, bottom: Boolean) {
		this.Right = right;
		this.Bottom = bottom;
	}
}

type Maze = {
	Dots: MazeDot[];
	Cells: MazeCell[][];
}

function AddMazeRow(input: String): Array<MazeCell> {
	let output: Array<MazeCell> = new Array<MazeCell>;
	input.split(' ').forEach(cellDef => {
		output.push(new MazeCell(cellDef.substring(0, 1) == '1', cellDef.substring(1) == '1'));
	});
	return output;
}


export const mazes: Maze[] = [
	{
		Dots: [{ X: 0, Y: 1 }],
		Cells: [
			AddMazeRow("00 01 10 00 01 01"),
			AddMazeRow("10 00 11 01 01 00"),
			AddMazeRow("10 01 10 00 01 00"),
			AddMazeRow("10 01 01 11 01 00"),
			AddMazeRow("00 01 10 00 11 00"),
			AddMazeRow("00 10 00 10 00 00"),
		]
	},
	{
		Dots: [{ X: 4, Y: 1 }],
		Cells: [
			AddMazeRow(""),
			AddMazeRow(""),
			AddMazeRow(""),
			AddMazeRow(""),
			AddMazeRow(""),
			AddMazeRow(""),
		]
	}
];

console.log(mazes);
console.log(mazes[0].Cells[1][2]);

export function renderMazes(): void {

	var mazes_inputs = getById("MazesForm");

	let group = document.createElement("div");


}
