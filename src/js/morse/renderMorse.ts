import { getById } from '../utilities';


export const morseSet: { [key: string]: string } = {
	A: "#8226 &#8213",
	B: "#8213 &#8226 &#8226 &#8226",
	// BX: "#8213 &#8226 &#8226 &#8226",
	C: "#8213 &#8226 &#8213 &#8226",
	E: "#8226",
	F: "#8226 &#8226 &#8213 &#8226",
	G: "#8213 &#8213 &#8226",
	H: "#8226 &#8226 &#8226 &#8226",
	I: "#8226 &#8226",
	K: "#8213 &#8226 &#8213",
	L: "#8226 &#8213 &#8226 &#8226",
	// LX: "#8226 &#8213 &#8226 &#8226",
	M: "#8213 &#8213",
	N: "#8213 &#8226",
	O: "#8213 &#8213 &#8213",
	R: "#8226 &#8213 &#8226",
	S: "#8226 &#8226 &#8226",
	T: "#8213",
	V: "#8226 &#8226 &#8226 &#8213",
	X: "#8213 &#8226 &#8226 &#8213"
};



export function renderMorse(): void {

	var morse_inputs = getById("MorseForm");

	let group = document.createElement("div");

	Object.values(morseSet).forEach((val, idx) => {
		let input = document.createElement("input");
		input.id = `morse_${idx}`;
		input.className = `btn-check`;
		input.setAttribute("type", "radio");
		input.setAttribute("name", `morse_${idx}`);
		input.setAttribute("autocomplete", "off");
		input.setAttribute("value", `${idx}`);

		let label = document.createElement("label");
		label.className = `btn btn-outline-primary`;
		label.setAttribute("for", `morse_${idx}`);
		label.setAttribute("data-symbolCode", `${val}`);
		label.insertAdjacentHTML('beforeend', `&${val};`);

		group.appendChild(input);
		group.appendChild(label);

		if ((idx + 1) % 6 == 0) {
			group.className = "btn-group d-flex";
			/*if (idx < Object.keys(symbolSet).length) {
				group.classList.add("mb-1");
			}*/
			group.setAttribute("role", "group");
			morse_inputs.appendChild(group);

			group = document.createElement("div");
		}

	});

}
