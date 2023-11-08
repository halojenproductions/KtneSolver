import { showSolution } from '../utilities';
import { morseSet } from './renderMorse';

///... is a spread operator: takes an array of letters and "spreads" them out so 
///that they are treated as individual arguments to the map function.
function generateMorseArray(...letters: string[]): string[] {
	return letters.map(letter => morseSet[letter].code.join(' '));
}

const morseSymbols: { [key: string]: [string, string[]] } = {
	shells: ["505", generateMorseArray('S', 'H', 'E', 'L', 'L', 'S')],
	halls: ["515", generateMorseArray('H', 'A', 'L', 'L', 'S')],
	slick: ["522", generateMorseArray('S', 'L', 'I', 'C', 'K')],
	trick: ["532", generateMorseArray('T', 'R', 'I', 'C', 'K')],
	boxes: ["535", generateMorseArray('B', 'O', 'X', 'E', 'S')],
	leaks: ["542", generateMorseArray('L', 'E', 'A', 'K', 'S')],
	strobe: ["545", generateMorseArray('S', 'T', 'R', 'O', 'B', 'E')],
	bristro: ["552", generateMorseArray('B', 'R', 'I', 'S', 'T', 'R', 'O')],
	flick: ["555", generateMorseArray('F', 'L', 'I', 'C', 'K')],
	bombs: ["565", generateMorseArray('B', 'O', 'M', 'B', 'S')],
	break: ["572", generateMorseArray('B', 'R', 'E', 'A', 'K')],
	brick: ["575", generateMorseArray('B', 'R', 'I', 'C', 'K')],
	steak: ["582", generateMorseArray('S', 'T', 'E', 'A', 'K')],
	string: ["592", generateMorseArray('S', 'T', 'R', 'I', 'N', 'G')],
	vector: ["595", generateMorseArray('V', 'E', 'C', 'T', 'O', 'R')],
	beats: ["600", generateMorseArray('B', 'E', 'A', 'T', 'S')]
};


export function morse_solve(): void {

	let selectedSymbols: string[] = <string[]>Array.from(
		document.querySelectorAll("#Morse input.btn-check:checked+.btn"),
		sym => sym.getAttribute("data-symbolCode")
	);

	let sequenceMatches: string[] = []; //check the second array for these symbles morseSymbols[i][1]

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
		let symDisplay: HTMLSpanElement = document.createElement("span");
		symDisplay.className = "flex-fill text-center mx-1";


		let symDisplayPrefix: HTMLSpanElement = document.createElement("span");
		symDisplayPrefix.className = "text-secondary";
		symDisplayPrefix.innerHTML = "3.";
		symDisplay.appendChild(symDisplayPrefix);

		let symResult: HTMLSpanElement = document.createElement("span");
		symResult.className = "text-success";
		symResult.innerHTML = `${sequenceMatches[0]}`;
		symDisplay.appendChild(symResult);

		let symDisplaySufix: HTMLSpanElement = document.createElement("span");
		symDisplaySufix.className = "text-secondary";
		symDisplaySufix.innerHTML = "  MHz";
		symDisplay.appendChild(symDisplaySufix);

		sol.appendChild(symDisplay);
		showSolution('Morse');
	} else {
		showSolution('Morse', false);
	}
}
