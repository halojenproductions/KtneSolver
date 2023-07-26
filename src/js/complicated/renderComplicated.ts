import { getById } from '../utilities';

interface ComplicatedProperty {
	id: string;
	name: string;
	className: string;
}

const props: ComplicatedProperty[] = [
	{ id: "red", name: "Red", className: "colour-red" },
	{ id: "blue", name: "Blue", className: "colour-blue" },
	{ id: "star", name: "Star", className: "" },
	{ id: "light", name: "Light", className: "" },
	{ id: "result", name: "Cut", className: "text-success disabled" },
];

function createComplicatedGroup(grpCounter: number): HTMLDivElement {
	const group: HTMLDivElement = document.createElement("div");
	group.className = `btn-group btn-group-sm d-flex flex-fill${grpCounter < 6 ? " mb-1" : ""}`;
	group.setAttribute("role", "group");

	for (const prop of props) {
		const input: HTMLInputElement = document.createElement("input");
		input.id = `complicated_${grpCounter}_${prop.id}`;
		input.className = "btn-check complicated_button";
		input.setAttribute("type", "checkbox");
		input.setAttribute("name", `complicated_${grpCounter}`);
		input.setAttribute("autocomplete", "off");

		const label: HTMLLabelElement = document.createElement("label");
		label.className = `btn btn-outline-primary col-2 ${prop.className}`;
		label.setAttribute("for", `complicated_${grpCounter}_${prop.id}`);
		label.appendChild(document.createTextNode(prop.name));
		label.id = `complicated_${grpCounter}_${prop.id}_label`;

		group.appendChild(input);
		group.appendChild(label);
	}

	return group;
}

export function renderComplicated(): void {
	const complicatedInputs = getById("ComplicatedForm");

	for (let grpCounter = 1; grpCounter <= 6; grpCounter++) {
		const group = createComplicatedGroup(grpCounter);
		complicatedInputs.appendChild(group);
	}

	const complicatedOptional = getById("complicated_optional");

	const groups = [
		["batteries", ["< 2 cells", ">= 2 cells"]],
		["serial", ["Even serial", "Odd serial"]],
		["parallel", ["Parallel port", "No parallel port"]],
	];

	for (const [groupName, btnLabels] of groups) {
		const prgDiv = document.createElement("div");
		prgDiv.className = "btn-group btn-group-sm d-flex flex-fill d-none mb-1";
		prgDiv.setAttribute("role", "group");
		prgDiv.id = `complicated_${groupName}`;

		for (let btnCounter = 0; btnCounter < btnLabels.length; btnCounter++) {
			const btnName = groupName[0];
			const input = document.createElement("input");
			input.id = `complicated_${btnName}${btnCounter + 1}`;
			input.className = "btn-check";
			input.setAttribute("type", "radio");
			input.setAttribute("name", `complicated_${btnName}`);
			input.setAttribute("autocomplete", "off");

			const label = document.createElement("label");
			label.className = "btn btn-outline-primary col-2";
			label.setAttribute("for", `complicated_${btnName}${btnCounter + 1}`);
			label.appendChild(document.createTextNode(btnLabels[btnCounter]));

			prgDiv.appendChild(input);
			prgDiv.appendChild(label);
		}

		complicatedOptional.appendChild(prgDiv);
	}
}
