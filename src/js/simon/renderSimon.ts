import { getById } from '../utilities';

export function renderSimon(): void {

	const colours = [["Red", "red"], ["Blue", "blue"], ["Green", "green"], ["Yellow", "yellow"]];

	var bomb_inputs = getById("SimonAttributes");
	var bomb = [["serial", "vowel,other"], ["strikes", "0,1,2"]]

	for (var ii = 0; ii <= bomb.length - 1; ii++) {
		var group = document.createElement("div")
		group.className = "btn-group-sm btn-group align-top";
		group.setAttribute("role", "group");

		var options = bomb[ii][1].split(","); 

		for (var iii = 0; iii <= options.length - 1; iii++) {
			var input = document.createElement("input");
			input.id = `simon_${bomb[ii][0]}_${options[iii]}`;
			input.className = `btn-check simon_${bomb[ii][0]}`;
			input.setAttribute("type", "radio");
			input.setAttribute("name", `simon_${bomb[ii][0]}`);
			input.setAttribute("autocomplete", "off");
			input.setAttribute("value", `${options[iii]}`)

			var label = document.createElement("label");
			label.className = `btn btn-outline-primary`;
			label.setAttribute("for", `simon_${bomb[ii][0]}_${options[iii]}`);
			label.appendChild(document.createTextNode(`${options[iii]} ${bomb[ii][0]}`.substring(0, 10)));

			group.appendChild(input);
			group.appendChild(label);
		}

		bomb_inputs.appendChild(group);
		bomb_inputs.appendChild(document.createTextNode(" "));
	}

	var simon_inputs = getById("SimonForm");

	for (let i = 0; i <= 5; i++) {
		var group = document.createElement("div");
		group.className = "btn-group btn-group-sm d-flex";
		group.setAttribute("role", "group");

		for (let ii = 0; ii <= 3; ii++) {
			var input = document.createElement("input");
			input.id = `simon_${i}_${ii}`;
			input.className = `btn-check simon_${i} ${colours[ii][1]}`;
			input.setAttribute("type", "radio");
			input.setAttribute("name", `simon_${i}`);
			input.setAttribute("autocomplete", "off");
			input.setAttribute("value", `${colours[ii][1]}`)

			var label = document.createElement("label");
			label.className = `btn btn-outline-primary flex-grow-1 colour-${colours[ii][1]}`;
			label.setAttribute("for", `simon_${i}_${ii}`);
			label.appendChild(document.createTextNode(`${colours[ii][0]}`));

			group.appendChild(input);
			group.appendChild(label);
		}

		simon_inputs.appendChild(group);
	}
}