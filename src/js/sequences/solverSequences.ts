import { getById } from '../utilities';
import { lineCount } from './setupSequences';

enum Colour {
	Blue = "blue",
	Red = "red",
	Black = "black"
}

const count = {
	red: 0,
	blue: 0,
	black: 0
};

export function Sequences_solve(): void {
	resetCount();

	for (let i = 1; i <= lineCount; i++) {
		const id = `Sequences_${i}`;
		solveWire(id);
	}
}

function resetCount(): void {
	count.red = 0;
	count.blue = 0;
	count.black = 0;
}

function solveWire(id: string): void {
	const wireColourInput: HTMLInputElement | null = document.querySelector(`.${id}_wireColour:checked`);
	const wireColour: Colour = wireColourInput?.value as Colour || "";

	const wireConnectionInput: HTMLInputElement | null = document.querySelector(`.${id}_wireConnection:checked`);
	const wireConnection: string = wireConnectionInput?.value || "";

	let cut = false;
	let leave = false;

	if (wireColour == Colour.Red) {
		count.red++;
		switch (wireConnection) {
			case "A":
				cut = [3, 4, 6, 7, 8].includes(count.red);
				leave = !cut;
				break;
			case "B":
				cut = [2, 5, 7, 8, 9].includes(count.red);
				leave = !cut;
				break;
			case "C":
				cut = [1, 4, 6, 7].includes(count.red);
				leave = !cut;
				break;
		}
	}
	else if (wireColour == Colour.Blue) {
		count.blue++;
		switch (wireConnection) {
			case "A":
				cut = [2, 4, 8, 9].includes(count.blue);
				leave = !cut;
				break;
			case "B":
				cut = [1, 3, 5, 6].includes(count.blue);
				leave = !cut;
				break;
			case "C":
				cut = [2, 6, 7, 8].includes(count.blue);
				leave = !cut;
				break;
		}
	}
	else if (wireColour == Colour.Black) {
		count.black++;
		switch (wireConnection) {
			case "A":
				cut = [1, 2, 4, 7].includes(count.black);
				leave = !cut;
				break;
			case "B":
				cut = [1, 3, 5, 6, 7].includes(count.black);
				leave = !cut;
				break;
			case "C":
				cut = [1, 2, 4, 6, 8, 9].includes(count.black);
				leave = !cut;
				break;
		}
	}

	if (cut) {
		console.log("Cut wire");
		getById(`${id}_6_label`).innerHTML = "Cut";
	} else if (leave) {
		console.log("Leave wire");
		getById(`${id}_6_label`).innerHTML = "Leave";
	} else {
		console.log("Unsolved wire");
		getById(`${id}_6_label`).innerHTML = "";
	}
}
