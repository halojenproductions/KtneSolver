import { getById } from '../utilities';

export function renderBasic(): void {
	var basicForm = getById("BasicForm");
	var colours = [["Red", "red"], ["Blue", "blue"], ["Yellow", "yellow"], ["Black", "black"], ["White", "white"]];

	for (let i = 1; i <= 6; i++) {
		var group = document.createElement("div");
		group.className = "btn-group btn-group-sm d-flex";
		if (i < 6) {
			group.classList.add("mb-1");
		}
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

		basicForm.appendChild(group);
	}

	var basic_optional = getById("basic_optional");

	group = document.createElement("div");
	group.className = "btn-group-sm btn-group align-top d-none";
	group.setAttribute("role", "group");
	group.id = "basic_serial"

	var serial = ["Even Serial", "Odd Serial"]

	for (let ii = 0; ii <= 1; ii++) {
		var input = document.createElement("input");
		input.id = `basic_s${ii + 1}`;
		input.className = "btn-check";
		input.setAttribute("type", "radio");
		input.setAttribute("name", `basic_s`);
		input.setAttribute("autocomplete", "off");

		var label = document.createElement("label");
		label.className = "btn btn-outline-primary";
		label.setAttribute("for", `basic_s${ii + 1}`);
		label.appendChild(document.createTextNode(`${serial[ii]}`));

		group.appendChild(input);
		group.appendChild(label);
	}

	basic_optional.appendChild(group);
}