import { getById } from '../utilities';

export interface MorseDefinition {
	code: string;
	line: number;
	isSpecial?: boolean;
}

export const morseSet: { [letter: string]: MorseDefinition } = {
	E: { code: "#8226", line: 1 },
	I: { code: "#8226 &#8226", line: 1 },
	S: { code: "#8226 &#8226 &#8226", line: 1 },
	H: { code: "#8226 &#8226 &#8226 &#8226", line: 1 },

	

	A: { code: "#8226 &#8213", line: 2 },
	R: { code: "#8226 &#8213 &#8226", line: 2 },
	F: { code: "#8226 &#8226 &#8213 &#8226", line: 2, isSpecial: true },
	V: { code: "#8226 &#8226 &#8226 &#8213", line: 2, isSpecial: true },
	L: { code: "#8226 &#8213 &#8226 &#8226", line: 2 },

	T: { code: "#8213", line: 3 },
	M: { code: "#8213 &#8213", line: 3, isSpecial: true },
	O: { code: "#8213 &#8213 &#8213", line: 3 },

	N: { code: "#8213 &#8226", line: 4, isSpecial: true },
	K: { code: "#8213 &#8226 &#8213", line: 4 },
	G: { code: "#8213 &#8213 &#8226", line: 4, isSpecial: true },

	B: { code: "#8213 &#8226 &#8226 &#8226", line: 4 },
	C: { code: "#8213 &#8226 &#8213 &#8226", line: 4 },
	X: { code: "#8213 &#8226 &#8226 &#8213", line: 4, isSpecial: true }
};




export function renderMorse(): void {

	var morse_inputs = getById("MorseForm");
	let line = 1;
	let group = document.createElement("div");

	Object.values(morseSet).forEach((val, idx) => {
		debugger
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
		label.setAttribute("data-symbolCode", `${val.code}`);
		label.insertAdjacentHTML('beforeend', `&${val.code};`);

		group.appendChild(input);
		group.appendChild(label);

		line = val.line;
	});

	// Add the final group after the loop
	group.className = "btn-group d-flex";
	group.setAttribute("role", "group");
	morse_inputs.appendChild(group);
}
