import { showSolution } from '../utilities';

export function simon_solve(): void {

	let result: string[] = [];

	const flash = ["red","blue","green","yellow"];

	const button = [ //[any vowel colours][no vowels colours]
		[["blue", "yellow", "green"], ["blue", "red", "yellow"]], //red
		[["red", "green", "red"], ["yellow", "blue", "green"]], //blue
		[["yellow", "blue", "yellow"], ["green", "yellow", "blue"]], //green
		[["green", "red", "blue"], ["red", "green", "red"]] //yellow
	]

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
	
			result.push(button[flash.indexOf(input)][serial][strikes]);
		}
	}

	let sol: HTMLDivElement = <HTMLDivElement>document.querySelector("#Simon div.solution");

	console.log(`${result.join("+")}`);
	sol.innerHTML = result.join(", ");
	showSolution('Simon', result.length > 0);
}
