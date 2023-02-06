import { showSolution } from '../utilities';
 //import { colours } from './renderSimon';

export function simon_solve(): void { 

	let result = "";
	
	//replace magic string with colours import
	// const flash = { //[any vowel colours][no vowels colours]
	// 	red: [[["blue"],["yellow"],["green"]],[["blue"],["red"],["yellow"]]],
	// 	blue : [[["red"],["green"],["red"]],[["yellow"],["blue"],["green"]]],
	// 	green : [[["yellow"],["blue"],["yellow"]],[["green"],["yellow"],["blue"]]],
	// 	yellow : [[["green"],["red"],["blue"]],[["red"],["green"],["red"]]]
	// }

	//get serial for first of 2nd set of elements
	//get strikes for the colour in the array

	//loop get group my name simon_i :checked

	//concatinate returned strings for each elemnet in the sequence

	let sol: HTMLDivElement = <HTMLDivElement>document.querySelector("#Simon div.solution");
	
	sol.innerHTML = result;
	showSolution('Simon', result.length > 0);
}
