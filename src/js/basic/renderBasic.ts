import { getById } from '../utilities';

export function renderBasic(): void {
	var basicwires_inputs = getById("BasicForm");
	var colours = [["Red", "red"], ["Blue", "blue"], ["Yellow", "yellow"], ["Black", "black"], ["White", "white"]];

	for (let i = 1; i <= 6; i++) {
		var group = document.createElement("div");
		group.className = "btn-group btn-group-sm d-flex";
		group.setAttribute("role", "group");

		for (let ii = 0; ii < 5; ii++) {
			var input = document.createElement("input");
			input.id = `basicwires_${i}_${ii}`;
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
}