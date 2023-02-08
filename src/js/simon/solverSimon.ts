import { showSolution, Colour, ToLowerArray, BuildColour } from '../utilities';

export function simon_solve(): void {

	const flash = ToLowerArray([
		Colour.Red,
		Colour.Blue,
		Colour.Green,
		Colour.Yellow
	]);

	const button = [
		[ToLowerArray([Colour.Blue, Colour.Yellow, Colour.Green]),
			ToLowerArray([Colour.Blue, Colour.Red, Colour.Yellow])], //red
		[ToLowerArray([Colour.Red, Colour.Green, Colour.Red]), 
			ToLowerArray([Colour.Yellow, Colour.Blue, Colour.Green])], //blue
		[ToLowerArray([Colour.Yellow, Colour.Blue, Colour.Yellow]), 
			ToLowerArray([Colour.Green, Colour.Yellow, Colour.Blue])], //green
		[ToLowerArray([Colour.Green, Colour.Red, Colour.Blue]), 
			ToLowerArray([Colour.Red, Colour.Green, Colour.Red])] //yellow
	]	

	let serial_input: NodeListOf<HTMLInputElement> = document.querySelectorAll('.simon_serial:checked');
	let strikes_input: NodeListOf<HTMLInputElement> = document.querySelectorAll('.simon_strikes:checked');

	if (serial_input.length == 0) {		
		return;
	}
	let serial_idx
	if (serial_input[0].value == "vowel") {
		serial_idx = 0
	} else {
		serial_idx = 1
	}


	if (strikes_input.length == 0) {
		return; 
	}
	let strikes_idx: number = parseInt(strikes_input[0].value);

	let result: string[] = [];
	for (let i = 0; i <= 5; i++) {

		let html: NodeListOf<HTMLInputElement> = document.querySelectorAll(`.simon_${i}:checked`);
		if (html.length > 0) {
			let colour = new BuildColour(html[0].value);			
			result.push(button[flash.indexOf(colour.id)][serial_idx][strikes_idx]);				
		}
	}

	let sol: HTMLDivElement = <HTMLDivElement>document.querySelector("#Simon div.solution");

	console.log(`${result.join("+")}`);
	sol.innerHTML = result.join(", ");
	showSolution('Simon', result.length > 0);
}
