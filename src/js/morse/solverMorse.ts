import { showSolution } from '../utilities';
import { morseSet } from './renderMorse';

morseSet.NEW_KEY = '...'; // Add the new key-value pair here

// const morseSymbols: { [key: string]: [string, string[]] } = {
// 	shells: ["3.505 MHz", [morseSet.S, morseSet.H, morseSet.E, morseSet.L, morseSet.LX]],
// 	halls: ["3.515 MHz", [morseSet.H, morseSet.A, morseSet.L, morseSet.LX, morseSet.S]],
// 	slick: ["3.522 MHz", [morseSet.S, morseSet.L, morseSet.LX, morseSet.I, morseSet.C, morseSet.K]],
// 	trick: ["3.532 MHz", [morseSet.T, morseSet.R, morseSet.I, morseSet.C, morseSet.K]],
// 	boxes: ["3.535 MHz", [morseSet.B, morseSet.BX, morseSet.O, morseSet.X, morseSet.E, morseSet.S]],
// 	leaks: ["3.542 MHz", [morseSet.L, morseSet.LX, morseSet.E, morseSet.A, morseSet.K, morseSet.S]],
// 	strobe: ["3.545 MHz", [morseSet.S, morseSet.T, morseSet.R, morseSet.O, morseSet.B, morseSet.BX, morseSet.E]],
// 	bristro: ["3.552 MHz", [morseSet.B, morseSet.BX, morseSet.R, morseSet.I, morseSet.S, morseSet.T, morseSet.R, morseSet.O]],
// 	flick: ["3.555 MHz", [morseSet.F, morseSet.L, morseSet.LX, morseSet.I, morseSet.C, morseSet.K]],
// 	bombs: ["3.565 MHz", [morseSet.B, morseSet.BX, morseSet.O, morseSet.M, morseSet.BX, morseSet.S]],
// 	break: ["3.572 MHz", [morseSet.B, morseSet.BX, morseSet.R, morseSet.E, morseSet.A, morseSet.K]],
// 	brick: ["3.575 MHz", [morseSet.B, morseSet.BX, morseSet.R, morseSet.I, morseSet.C, morseSet.K]],
// 	steak: ["3.582 MHz", [morseSet.S, morseSet.T, morseSet.E, morseSet.A, morseSet.K]],
// 	string: ["3.592 MHz", [morseSet.S, morseSet.T, morseSet.I, morseSet.N, morseSet.G]],
// 	vector: ["3.595 MHz", [morseSet.V, morseSet.E, morseSet.C, morseSet.T, morseSet.O, morseSet.R]],
// 	beats: ["3.600 MHz", [morseSet.B, morseSet.BX, morseSet.E, morseSet.A, morseSet.T, morseSet.S]]
// };
const morseSymbols: { [key: string]: [string, string[]] } = {
	shells: ["3.505 MHz", [morseSet.S, morseSet.H, morseSet.E, morseSet.L]],
	halls: ["3.515 MHz", [morseSet.H, morseSet.A, morseSet.L,  morseSet.S]],
	slick: ["3.522 MHz", [morseSet.S, morseSet.L,  morseSet.I, morseSet.C, morseSet.K]],
	trick: ["3.532 MHz", [morseSet.T, morseSet.R, morseSet.I, morseSet.C, morseSet.K]],
	boxes: ["3.535 MHz", [morseSet.B, morseSet.O, morseSet.X, morseSet.E, morseSet.S]],
	leaks: ["3.542 MHz", [morseSet.L,  morseSet.E, morseSet.A, morseSet.K, morseSet.S]],
	strobe: ["3.545 MHz", [morseSet.S, morseSet.T, morseSet.R, morseSet.O, morseSet.B, morseSet.E]],
	bristro: ["3.552 MHz", [morseSet.B, morseSet.R, morseSet.I, morseSet.S, morseSet.T, morseSet.R, morseSet.O]],
	flick: ["3.555 MHz", [morseSet.F, morseSet.L,  morseSet.I, morseSet.C, morseSet.K]],
	bombs: ["3.565 MHz", [morseSet.B, morseSet.O, morseSet.M, morseSet.S]],
	break: ["3.572 MHz", [morseSet.B, morseSet.R, morseSet.E, morseSet.A, morseSet.K]],
	brick: ["3.575 MHz", [morseSet.B, morseSet.R, morseSet.I, morseSet.C, morseSet.K]],
	steak: ["3.582 MHz", [morseSet.S, morseSet.T, morseSet.E, morseSet.A, morseSet.K]],
	string: ["3.592 MHz", [morseSet.S, morseSet.T, morseSet.I, morseSet.N, morseSet.G]],
	vector: ["3.595 MHz", [morseSet.V, morseSet.E, morseSet.C, morseSet.T, morseSet.O, morseSet.R]],
	beats: ["3.600 MHz", [morseSet.B, morseSet.E, morseSet.A, morseSet.T, morseSet.S]]
};

export function morse_solve(): void {

	let selectedSymbols: string[] = <string[]>Array.from(
		document.querySelectorAll("#Morse input.btn-check:checked+.btn"),
		sym => sym.getAttribute("data-symbolCode")
	);

	let sequenceMatches: string[] = []; //check the second array for these symbles morseSymbols[i][1]
	debugger
	for (const key in morseSymbols) {
		if (morseSymbols.hasOwnProperty(key)) {
			const seq = morseSymbols[key][1];
			if (selectedSymbols.every(s => seq.includes(s))) {
				sequenceMatches.push(morseSymbols[key][0]);
			}
		}
	}

	let sol: HTMLDivElement = <HTMLDivElement>document.querySelector("#Morse div.solution");
	sol.innerHTML = "";


	if (sequenceMatches.length == 1) {
		debugger
		let symDisplay: HTMLSpanElement = document.createElement("span");
		symDisplay.className = "flex-fill text-center mx-1";

		symDisplay.innerHTML = `${sequenceMatches[0]}`; //morseSymbols[key][0]
		sol.appendChild(symDisplay);

		showSolution('Morse');
	} else {
		showSolution('Morse', false);
	}
}
