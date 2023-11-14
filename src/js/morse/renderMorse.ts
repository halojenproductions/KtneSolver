import { getById } from '../utilities';

export interface MorseDefinition2 {
	code: string[];
	line: number;
	isSpecial?: boolean;
}

export const dit = '8226';
export const dah = '8213';

export const morseSet: { [letter: string]: MorseDefinition2 } = {
	E: { code: [dit], line: 1 },
	I: { code: [dit, dit], line: 1 },
	S: { code: [dit, dit, dit], line: 1 },
	H: { code: [dit, dit, dit, dit], line: 1 },



	A: { code: [dit, dah], line: 2 },
	R: { code: [dit, dah, dit], line: 2 },
	F: { code: [dit, dit, dah, dit], line: 2, isSpecial: true },
	V: { code: [dit, dit, dit, dah], line: 2, isSpecial: true },
	L: { code: [dit, dah, dit, dit], line: 2 },

	T: { code: [dah], line: 3 },
	M: { code: [dah, dah], line: 3, isSpecial: true },
	O: { code: [dah, dah, dah], line: 3 },

	N: { code: [dah, dit], line: 4, isSpecial: true },
	K: { code: [dah, dit, dah], line: 4 },
	G: { code: [dah, dah, dit], line: 4, isSpecial: true },

	B: { code: [dah, dit, dit, dit], line: 5 },
	C: { code: [dah, dit, dah, dit], line: 5 },
	X: { code: [dah, dit, dit, dah], line: 5, isSpecial: true }
};



export function renderMorse(): void {

	var morse_inputs = getById("MorseForm");
	let line = 1;
	let group = document.createElement("div");

	Object.values(morseSet).forEach((val, idx) => {
		if (val.line != line) {
			group.className = "btn-group d-flex";

			group.setAttribute("role", "group");
			morse_inputs.appendChild(group);
			group = document.createElement("div");
		}

		let input = document.createElement("input");
		input.id = `morse_${idx}`;
		input.className = `btn-check`;
		input.setAttribute("type", "radio");
		input.setAttribute("name", `morse_${idx}`);
		input.setAttribute("autocomplete", "off");
		input.setAttribute("value", `${idx}`);

		let label = document.createElement("label");
		if (val.isSpecial) {
			label.className = `btn btn-outline-primary`;
		}
		else {
			label.className = `btn btn-outline-secondary`;
		}

		label.setAttribute("for", `morse_${idx}`);
		label.setAttribute("data-symbolCode", `${val.code.join(' ')}`);
		label.insertAdjacentHTML('beforeend', `&#${val.code.join('; &#')};`);

		group.appendChild(input);
		group.appendChild(label);

		line = val.line;
	});

	// Add the final group after the loop
	group.className = "btn-group d-flex";
	group.setAttribute("role", "group");
	morse_inputs.appendChild(group);
}
