import { getById } from '../utilities';
import { lineCount} from './setupSequences';

export function renderSequences(): void {
	const attributes = [
		{ text: "Red", name: "wireColour", value: "red", class: "colour-red", width: "" },
		{ text: "Blue", name: "wireColour", value: "blue", class: "colour-blue", width: "" },
		{ text: "Black", name: "wireColour", value: "black", class: "colour-black", width: "" },
		{ text: "A", name: "wireConnection", value: "A", class: "", width: "" },
		{ text: "B", name: "wireConnection", value: "B", class: "", width: "" },
		{ text: "C", name: "wireConnection", value: "C", class: "", width: "" },
		{ text: "", name: "wireSolution", value: "", class: "text-success disabled flex-shrink-0 flex-grow-1", width: "50px" }
	];

	const Sequences_inputs = getById("SequencesForm");

	for (let i = 1; i <= lineCount; i++) {
		const group: HTMLDivElement = document.createElement("div");
		group.className = "btn-group btn-group-sm d-flex";
		if (i < lineCount) {
			group.classList.add("mb-1");
		}
		group.setAttribute("role", "group");

		for (let ii = 0; ii < attributes.length; ii++) {
			const { text, name, value, class: textColor, width } = attributes[ii];

			const input: HTMLInputElement = document.createElement("input");
			input.id = `Sequences_${i}_${ii}`;
			input.className = `btn-check Sequences_${i}_${name}`;
			input.type = "radio";
			input.name = `Sequences_${i}_${name}`;
			input.autocomplete = "off";
			input.value = value

			const label: HTMLLabelElement = document.createElement("label");
			label.className = `btn btn-outline-primary ${textColor}`;
			label.style.width = width;
			label.htmlFor = `Sequences_${i}_${ii}`;
			label.textContent = text;
			label.id = `Sequences_${i}_${ii}_label`;

			group.appendChild(input);
			group.appendChild(label);
		}
		Sequences_inputs.appendChild(group);
	}
}
