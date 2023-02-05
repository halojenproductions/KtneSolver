import { getById } from '../utilities';

export function renderKnobs(): void {
	for (let i = 1; i <= 3; i++) {
		var knobs_input = getById("KnobsForm");

		var group = document.createElement("div");
		group.className = `btn-group-sm btn-group-vertical align-top`;
		group.setAttribute("role", "group");

		for (let ii = 1; ii <= 2; ii++) {
			var input = document.createElement("input");
			input.id = `knobs_${i}_${ii}`;
			input.className = "btn-check ";
			input.setAttribute("type", "checkbox");
			input.setAttribute("autocomplete", "off");

			var label = document.createElement("label");
			label.className = "btn btn-outline-primary ";
			label.setAttribute("for", `knobs_${i}_${ii}`);
			label.appendChild(document.createTextNode("LIGHT"));

			group.appendChild(input);
			group.appendChild(label);
		}
		knobs_input.appendChild(group);
	}
}