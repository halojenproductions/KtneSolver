import { getById } from '../utilities';
import { symbolSet } from './renderKeypad';

const keypadSymbols: readonly string[][] = [
	[symbolSet.Q, symbolSet.A, symbolSet.Lambda, symbolSet.Lightening, symbolSet.Alien, symbolSet.Hallmark, symbolSet.BackwardsC],
	[symbolSet.BackwardsE, symbolSet.Q, symbolSet.BackwardsC, symbolSet.PigTail, symbolSet.WhiteStar, symbolSet.Hallmark, symbolSet.QuestionMark],
	[symbolSet.Copyright, symbolSet.SaggyBoobs, symbolSet.PigTail, symbolSet.MirrorK, symbolSet.Melting3, symbolSet.Lambda, symbolSet.WhiteStar],
	[symbolSet.Sigma, symbolSet.CarriageReturn, symbolSet.B, symbolSet.Alien, symbolSet.MirrorK, symbolSet.QuestionMark, symbolSet.PokeyOuteyTongue],
	[symbolSet.Trident, symbolSet.PokeyOuteyTongue, symbolSet.B, symbolSet.C, symbolSet.CarriageReturn, symbolSet.Caterpillar, symbolSet.BlackStar],
	[symbolSet.Sigma, symbolSet.BackwardsE, symbolSet.DoubleDagger, symbolSet.AE, symbolSet.Trident, symbolSet.N, symbolSet.Omega],
]

export function keypad_solve(): void {
	let selectedSymbols: string[] = <string[]>Array.from(
		document.querySelectorAll("#Keypad input.btn-check:checked+.btn"), // Get buttons (labels) that are on.
		sym => sym.getAttribute("data-symbolCode") // Map just the symbol code to the array.
	);

	let sequenceMatches: number[] = [];
	keypadSymbols
	.forEach((seq, idx) => {
		if (selectedSymbols.every(s => seq.includes(s))) {
			sequenceMatches.push(idx);
		}
	});

	if (sequenceMatches.length == 1) {
		// We have a match.
		let solution: string = keypadSymbols[sequenceMatches[0]]
		.map(sym => `&${sym};`)
		.join("&nbsp;&nbsp;&nbsp;"); // Todo: replace this shit with spans so padding/margins can take care of the spacing.

		getById("keypad_solution").innerHTML = solution;
	} else {
		// No [definitive] match.
		getById("keypad_solution").innerHTML = "";
	}
}

