import { getById } from '../utilities';

type MazeDot ={
	X:Number;
	Y:Number;
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



export const mazes: Maze[] = [{
	Dots: [{X:1,Y:1}],
	Cells: [[new MazeCell( false, false), new MazeCell( false, true), new MazeCell( true, false), new MazeCell( false, false), new MazeCell( false, true), new MazeCell( false, true)],
	[]
	]
}];



export function renderMazes(): void {

	var mazes_inputs = getById("MazesForm");

	let group = document.createElement("div");


}
