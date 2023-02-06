import { showSolution } from '../utilities';

export function simon_solve(): void {

	let result: string[] = [];

	const flash = { //[any vowel colours][no vowels colours]
		red: [["blue", "yellow", "green"], ["blue", "red", "yellow"]],
		blue: [["red", "green", "red"], ["yellow", "blue", "green"]],
		green: [["yellow", "blue", "yellow"], ["green", "yellow", "blue"]],
		yellow: [["green", "red", "blue"], ["red", "green", "red"]]
	}

	let serial_input: NodeListOf<HTMLInputElement> = document.querySelectorAll('.simon_serial:checked');
	let strikes_input: NodeListOf<HTMLInputElement> = document.querySelectorAll('.simon_strikes:checked');

	let serial;
	if (serial_input.length > 0) {
		if (serial_input[0].value == "vowel") {
			serial = 0;
		} else serial = 1;
	} else {
		return; //maybe add message?
	}

	if (strikes_input.length == 0) {
		return; //message?
	}
	let strikes: number = +strikes_input[0].value;

	for (let i = 0; i <= 5; i++) {

		let html: NodeListOf<HTMLInputElement> = document.querySelectorAll(`.simon_${i}:checked`);
		if (html.length > 0) {
			let input: string = html[0].value;

			switch (input) { //TODO: put colour into the array and ref. Remove switch
				case "red":
					result.push(flash.red[serial][strikes]);
					break;
				case "blue":
					result.push(flash.blue[serial][strikes]);
					break;
				case "yellow":
					result.push(flash.yellow[serial][strikes]);
					break;
				case "green":
					result.push(flash.green[serial][strikes]);
					break;
				default: break;
			}
		}
	}


	let sol: HTMLDivElement = <HTMLDivElement>document.querySelector("#Simon div.solution");

	console.log(`${result.join("+")}`);
	sol.innerHTML = result.join(", ");
	showSolution('Simon', result.length > 0);
}
