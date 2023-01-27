import { getById } from '../utilities';
//import { keypad_solve } from './solverKeypad';


const symbolSet: { [key: string]: string } = {
	Q: "#984",
	A: "#1126",
	Lambda: "#411",
	Lightening: "#990",
	Alien: "#1132",
	Hallmark: "#983",
	BackwardsC: "#1023",
	BackwardsE: "#1260",
	PigTail: "#1192",
	WhiteStar: "#9734",
	QuestionMark: "#191",
	Copyright: "#169",
	SaggyBoobs: "#1148",
	MirrorK: "#1046",
	Melting3: "#1134",
	Sigma: "#1004",
	CarriageReturn: "#182",
	B: "#384",
	PokeyOuteyTongue: "#9786",
	Trident: "#968",
	C: "#1022",
	Caterpillar: "#1134",
	BlackStar: "#9733",
	DoubleDagger: "#1154",
	AE: "#230",
	N: "#1162",
	Omega: "#937",
};

// const keypadSymbols: readonly string[][] = [
// 	[symbolSet.Q, symbolSet.A, symbolSet.Lambda, symbolSet.Lightening, symbolSet.Alien, symbolSet.Hallmark, symbolSet.BackwardsC],
// 	[symbolSet.BackwardsE, symbolSet.Q, symbolSet.BackwardsC, symbolSet.PigTail, symbolSet.WhiteStar, symbolSet.Hallmark, symbolSet.QuestionMark],
// 	[symbolSet.Copyright, symbolSet.SaggyBoobs, symbolSet.PigTail, symbolSet.MirrorK, symbolSet.Melting3, symbolSet.Lambda, symbolSet.WhiteStar],
// 	[symbolSet.Sigma, symbolSet.CarriageReturn, symbolSet.B, symbolSet.Alien, symbolSet.MirrorK, symbolSet.QuestionMark, symbolSet.PokeyOuteyTongue],
// 	[symbolSet.Trident, symbolSet.PokeyOuteyTongue, symbolSet.B, symbolSet.C, symbolSet.CarriageReturn, symbolSet.Caterpillar, symbolSet.BlackStar],
// 	[symbolSet.Sigma, symbolSet.BackwardsE, symbolSet.DoubleDagger, symbolSet.AE, symbolSet.Trident, symbolSet.N, symbolSet.Omega],
// ]




export function setupKeypad(): void {


	var keypad_inputs = getById("KeypadForm");

	let group = document.createElement("div");

	Object.values(symbolSet).forEach((val, idx) => {
		let input = document.createElement("input");
		input.id = `keypad_${idx}`;
		input.className = `btn-check`;
		input.setAttribute("type", "radio");
		input.setAttribute("name", `keypad_${idx}`);
		input.setAttribute("autocomplete", "off");
		input.setAttribute("value", `${idx}`);

		let label = document.createElement("label");
		label.className = `btn btn-outline-primary flex-grow-1`;
		label.setAttribute("for", `keypad_${idx}`);
		label.insertAdjacentHTML('beforeend', `&${val};`);

		group.appendChild(input);
		group.appendChild(label);

		if ((idx + 1) % 9 == 0) {
			group.className = "btn-group d-flex";
			group.setAttribute("role", "group");
			keypad_inputs.appendChild(group);

			group = document.createElement("div");
		}

	});





	/*
	
		for (let set: number = 0; set < 6; set++) {
			let group = document.createElement("div");
			group.className = "btn-group btn-group-sm d-flex";
			group.setAttribute("role", "group");
	
			for (let symbol: number = 0; symbol < 7; symbol++) {
				var input = document.createElement("input");
				input.id = `keypad_${set}_${set}`;
				input.className = `btn-check basicwires basicwires_${colours[ii][1]}`;
				input.setAttribute("type", "radio");
				input.setAttribute("name", `basicwires_${i}`);
				input.setAttribute("autocomplete", "off");
				input.setAttribute("value", `${colours[ii][1]}`);
	
				var label = document.createElement("label");
				label.className = `btn btn-outline-primary flex-grow-1 colour-${colours[ii][1]}`;
				label.setAttribute("for", `basicwires_${i}_${ii}`);
				label.appendChild(document.createTextNode(`${colours[ii][0]}`));
	
				group.appendChild(input);
				group.appendChild(label);
			}
	
			basicwires_inputs.appendChild(group);
		}
	
	*/


	/*
		Array.from(document.getElementsByClassName("possible")).forEach((element) => {
			element.addEventListener("keyup", passwd_solve);
			element.addEventListener("keypress", ((event: KeyboardEvent) => {
				if ("1234567890".includes(event.key)) {
					event.preventDefault();
					event.stopPropagation();
				}
				if ("12345".includes(event.key)) {
					document.getElementById(`passwd_letters${event.key}`)?.focus();
				}
			}) as EventListener);
		});
		*/
}
