import { getById } from '../utilities';


export const symbolSet: { [key: string]: string } = {
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
	Melting3: "#1286",
	Sigma: "#1004",
	CarriageReturn: "#182",
	B: "#384",
	PokeyOuteyTongue: "#1660",
	Trident: "#968",
	C: "#1022",
	Caterpillar: "#1134",
	BlackStar: "#9733",
	DoubleDagger: "#1154",
	AE: "#230",
	N: "#1162",
	Omega: "#937",
};



export function renderKeypad(): void {

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
		label.className = `btn btn-outline-primary flex-grow-1 fs-3 `;
		label.setAttribute("for", `keypad_${idx}`);
		label.setAttribute("data-symbolCode", `${val}`);
		label.insertAdjacentHTML('beforeend', `&${val};`);

		group.appendChild(input);
		group.appendChild(label);

		if ((idx + 1) % 9 == 0) {
			group.className = "btn-group d-flex";
			/*if (idx < Object.keys(symbolSet).length) {
				group.classList.add("mb-1");
			}*/
			group.setAttribute("role", "group");
			keypad_inputs.appendChild(group);

			group = document.createElement("div");
		}

	});

}
