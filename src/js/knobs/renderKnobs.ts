import { getById } from '../utilities';

export function renderKnobs(): void {
	for (let i = 1; i <= 2; i++) {
		let knobs_input = getById("KnobsForm");

		let group: HTMLDivElement = document.createElement("div");
		group.className = `btn-group btn-group-sm d-flex`;
		group.setAttribute("role", "group");

		for (let ii = 1; ii <= 3; ii++) {
			let input: HTMLInputElement = document.createElement("input");
			input.id = `knobs_${i}_${ii}`;
			input.className = "btn-check ";
			input.setAttribute("type", "checkbox");
			input.setAttribute("autocomplete", "off");
			input.setAttribute("name", `knobs_${i}`);

			let label: HTMLLabelElement = document.createElement("label");
			label.className = "btn btn-outline-primary ";
			label.setAttribute("for", `knobs_${i}_${ii}`);
			label.innerHTML="&nbsp;";

			group.appendChild(input);
			group.appendChild(label);
		}
		knobs_input.appendChild(group);
	}
}