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
		Dots: [{ Row: 1, Col: 0 }, { Row: 2, Col: 5 }],
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
		Dots: [{ Row: 1, Col: 4 }, { Row: 3, Col: 1 }],
		Cells: [
			AddMazeRow("01 00 11 00 00 01"),
			AddMazeRow("00 11 00 11 01 00"),
			AddMazeRow("10 00 11 00 01 00"),
			AddMazeRow("00 11 00 11 10 00"),
			AddMazeRow("10 10 10 00 11 00"),
			AddMazeRow("10 00 10 00 00 00"),
		]
	},
	{
		Dots: [{ Row: 3, Col: 3 }, { Row: 3, Col: 5 }],
		Cells: [
			AddMazeRow("00 01 10 10 00 00"),
			AddMazeRow("11 10 10 01 11 00"),
			AddMazeRow("00 10 10 00 10 00"),
			AddMazeRow("10 10 10 10 10 00"),
			AddMazeRow("10 01 11 10 10 00"),
			AddMazeRow("00 00 00 10 00 00"),
		]
	},
	{
		Dots: [{ Row: 0, Col: 0 }, { Row: 3, Col: 0 }],
		Cells: [
			AddMazeRow("00 10 01 01 01 00"),
			AddMazeRow("10 10 00 01 01 00"),
			AddMazeRow("10 01 11 00 11 00"),
			AddMazeRow("10 01 01 01 01 00"),
			AddMazeRow("00 01 01 01 10 00"),
			AddMazeRow("00 00 10 00 10 00"),
		]
	},
	{
		Dots: [{ Row: 2, Col: 4 }, { Row: 5, Col: 3 }],
		Cells: [
			AddMazeRow("01 01 01 01 00 00"),
			AddMazeRow("00 01 01 00 11 01"),
			AddMazeRow("00 10 01 11 00 00"),
			AddMazeRow("10 01 01 10 11 00"),
			AddMazeRow("10 00 01 01 11 00"),
			AddMazeRow("10 00 00 00 00 00"),
		]
	},
	{
		Dots: [{ Row: 0, Col: 4 }, { Row: 4, Col: 2 }],
		Cells: [
			AddMazeRow("10 00 10 01 00 00"),
			AddMazeRow("10 10 10 00 11 00"),
			AddMazeRow("00 11 11 10 00 01"),
			AddMazeRow("01 10 00 10 10 00"),
			AddMazeRow("00 11 11 10 01 00"),
			AddMazeRow("00 00 00 10 00 00"),
		]
	},
	{
		Dots: [{ Row: 0, Col: 1 }, { Row: 5, Col: 1 }],
		Cells: [
			AddMazeRow("00 01 01 10 00 00"),
			AddMazeRow("10 00 11 01 11 00"),
			AddMazeRow("01 11 00 11 00 01"),
			AddMazeRow("00 10 00 01 11 00"),
			AddMazeRow("10 11 01 01 10 00"),
			AddMazeRow("00 00 00 00 00 00"),
		]
	},
	{
		Dots: [{ Row: 0, Col: 3 }, { Row: 3, Col: 2 }],
		Cells: [
			AddMazeRow("10 00 01 10 00 00"),
			AddMazeRow("00 01 11 01 11 00"),
			AddMazeRow("10 00 01 01 10 00"),
			AddMazeRow("10 01 10 01 01 01"),
			AddMazeRow("10 10 01 01 01 01"),
			AddMazeRow("00 00 00 00 00 00"),
		]
	},
	{
		Dots: [{ Row: 1, Col: 2 }, { Row: 4, Col: 0 }],
		Cells: [
			AddMazeRow("10 00 01 01 00 00"),
			AddMazeRow("10 10 00 11 10 00"),
			AddMazeRow("00 01 11 00 11 00"),
			AddMazeRow("10 10 00 11 01 00"),
			AddMazeRow("10 10 10 00 10 01"),
			AddMazeRow("00 10 00 10 00 00"),
		]
	},
];
