export class MazeCoords {
	Row: number | null = null;
	Col: number | null = null;
	constructor(r: number, c: number) {
		this.Row = r;
		this.Col = c;
	}
	toString(): String {
		return `${this.Row},${this.Col}`;
	}
}

export class MazeCell {
	Right: Boolean;
	Bottom: Boolean;
	constructor(right: Boolean, bottom: Boolean) {
		this.Right = right;
		this.Bottom = bottom;
	}
}

export type Maze = {
	Dots: MazeCoords[];
	Cells: MazeCell[][];
}

function AddMazeRow(input: String): Array<MazeCell> {
	let output: Array<MazeCell> = new Array<MazeCell>;
	input.split(' ').forEach(cellDef => {
		output.push(new MazeCell(cellDef.substring(0, 1) == '1', cellDef.substring(1) == '1'));
	});
	return output;
}


export const Mazes: Maze[] = [
	{
		Dots: [{ Row: 0, Col: 1 }, { Row: 5, Col: 2 }],
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
		Dots: [{ Row: 4, Col: 1 }, { Row: 1, Col: 3 }],
		Cells: [
			AddMazeRow("01 00 11 00 00 01"),
			AddMazeRow("00 11 00 11 01 00"),
			AddMazeRow("10 00 11 00 01 00"),
			AddMazeRow("00 11 00 11 10 00"),
			AddMazeRow("10 10 10 00 11 00"),
			AddMazeRow("10 00 10 00 00 00"),
		]
	}
];
