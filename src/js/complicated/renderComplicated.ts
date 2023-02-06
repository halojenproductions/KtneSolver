import { getById } from '../utilities';

export function renderComplicated(): void {
	var attributes = [["Light", ""], ["Red", "colour-red"], ["Blue", "colour-blue"], ["Star", ""], ["Cut", "text-success disabled"]];
	for (let i = 1; i <= 6; i++) {
		var complicated_inputs = getById("complicated_inputs");

		var group = document.createElement("div");
		group.className = `btn-group-sm btn-group-vertical align-top`;
		group.setAttribute("role", "group");

		for (let ii = 0; ii <= 4; ii++) {
			var input = document.createElement("input");
			input.id = `complicated_${i}_${ii}`;
			input.className = "btn-check complicated_button";
			input.setAttribute("type", "checkbox");
			input.setAttribute("name", `complicated_${i}`);
			input.setAttribute("autocomplete", "off");

			var label = document.createElement("label");
			label.className = `btn btn-outline-primary ${attributes[ii][1]}`;
			label.setAttribute("for", `complicated_${i}_${ii}`);
			label.appendChild(document.createTextNode(`${attributes[ii][0]}`));
			label.id = `complicated_${i}_${ii}_label`;

			group.appendChild(input);
			group.appendChild(label);
		}
		complicated_inputs.appendChild(group);
	}
}