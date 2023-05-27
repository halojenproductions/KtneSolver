import { getById } from '../utilities';

export function renderComplicated(): void {
	let props = [["Red", "colour-red"], ["Blue", "colour-blue"], ["Star", ""], ["Light", ""], ["Cut", "text-success disabled"]];
	let complicated_inputs = getById("ComplicatedForm");

	for (let grpCounter = 1; grpCounter <= 6; grpCounter++) {
		let group: HTMLDivElement = document.createElement("div");
		group.className = `btn-group btn-group-sm d-flex flex-fill`;
		if (grpCounter < 6) {
			group.classList.add("mb-1");
		}
		group.setAttribute("role", "group");

		for (let btnCounter = 0; btnCounter <= 4; btnCounter++) {
			let input: HTMLInputElement = document.createElement("input");
			input.id = `complicated_${grpCounter}_${btnCounter}`;
			input.className = "btn-check complicated_button";
			input.setAttribute("type", "checkbox");
			input.setAttribute("name", `complicated_${grpCounter}`);
			input.setAttribute("autocomplete", "off");

			let label: HTMLLabelElement = document.createElement("label");
			label.className = `btn btn-outline-primary col-2 ${props[btnCounter][1]}`;
			label.setAttribute("for", `complicated_${grpCounter}_${btnCounter}`);
			label.appendChild(document.createTextNode(`${props[btnCounter][0]}`));
			label.id = `complicated_${grpCounter}_${btnCounter}_label`;

			group.appendChild(input);
			group.appendChild(label);
		}
		complicated_inputs.appendChild(group);
	}

	var complicated_optional = getById("complicated_optional");

	var groups = [
		["batteries", ["< 2 cells", ">= 2 cells"]],
		["serial", ["Even serial", "Odd serial"]],
		["parallel", ["Parallel port", "No parallel port"]]
	];

	for (let grpCounter = 0; grpCounter <= groups.length - 1; grpCounter++) {
		var group = groups[grpCounter][0].toString();
		var prgDiv = document.createElement("div");
		prgDiv.className = "btn-group btn-group-sm d-flex flex-fill d-none";
		prgDiv.classList.add("mb-1");
		prgDiv.setAttribute("role", "group");
		prgDiv.id = `complicated_${group}`;

		for (let btnCounter = 0; btnCounter <= 1; btnCounter++) {

			var btnName = group[0];
			var input = document.createElement("input");
			input.id = `complicated_${btnName}${btnCounter + 1}`;
			input.className = "btn-check";
			input.setAttribute("type", "radio");
			input.setAttribute("name", `complicated_${btnName}`);
			input.setAttribute("autocomplete", "off");

			var label = document.createElement("label");
			label.className = `btn btn-outline-primary col-2`;
			label.setAttribute("for", `complicated_${btnName}${btnCounter + 1}`);
			label.appendChild(document.createTextNode(`${groups[grpCounter][1][btnCounter]}`));

			prgDiv.appendChild(input);
			prgDiv.appendChild(label);
		}
		complicated_optional.appendChild(prgDiv);
	}
}