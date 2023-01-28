// import { getById } from './../utilities';
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
	var aoeu = keypadSymbols;
	aoeu = aoeu;
	// var inputs = [
	// 	(getById("passwd_letters1")).value.toLowerCase().split(""),
	// 	(getById("passwd_letters2")).value.toLowerCase().split(""),
	// 	(getById("passwd_letters3")).value.toLowerCase().split(""),
	// 	(getById("passwd_letters4")).value.toLowerCase().split(""),
	// 	(getById("passwd_letters5")).value.toLowerCase().split(""),
	// ];
	// let matches = passwdookups.filter((lookupWord) => {
	// 	let wordLetters = lookupWord.split("");

	// 	let hasMatch = true;
	// 	for (var i = 0; i < 5; i++) {
	// 		hasMatch &&= inputs[i].length === 0 || inputs[i].includes(wordLetters[i]);
	// 	}
	// 	return hasMatch;
	// });

	// (getById("passwd_solution")).innerHTML = matches.join("<br>");
	// console.log(matches);
}

