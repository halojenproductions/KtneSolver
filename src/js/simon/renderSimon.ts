import { getById, BuildColour, Colour } from '../utilities';

export function renderSimon(): void {

	const colours = [
		 new BuildColour(Colour.Red),
		 new BuildColour(Colour.Blue),
		 new BuildColour(Colour.Green),
		 new BuildColour(Colour.Yellow)
	]	

	var bomb_inputs = getById("SimonAttributes");
	var bomb = [["serial", ["vowel","no vowel"]], 
				["strikes", ["0","1","2"]]]

	for (var ii = 0; ii <= bomb.length - 1; ii++) {
		var group = document.createElement("div") //todo: dynamic groups render without a gap
		group.className = "btn-group-sm btn-group align-top";
		group.setAttribute("role", "group");

		for (var iii = 0; iii <= bomb[ii][1].length - 1; iii++) {			
			var input = document.createElement("input");
			input.id = `simon_${bomb[ii][0]}_${bomb[ii][1][iii]}`;
			input.className = `btn-check simon_${bomb[ii][0]}`;
			input.setAttribute("type", "radio");
			input.setAttribute("name", `simon_${bomb[ii][0]}`);
			input.setAttribute("autocomplete", "off");
			input.setAttribute("value", `${iii}`)

			var label = document.createElement("label");
			label.className = `btn btn-outline-primary`;
			label.setAttribute("for", `simon_${bomb[ii][0]}_${bomb[ii][1][iii]}`);
			label.appendChild(document.createTextNode(`${bomb[ii][1][iii]} ${bomb[ii][0]}`.substring(0, 10)));

			group.appendChild(input);
			group.appendChild(label);
		}

		bomb_inputs.appendChild(group);		
	}

	var simon_inputs = getById("SimonForm");

	for (let i = 0; i <= 5; i++) {
		var group = document.createElement("div");
		group.className = "btn-group btn-group-sm d-flex";
		group.setAttribute("role", "group");

		for (let ii = 0; ii <= 3; ii++) {
			var input = document.createElement("input");
			input.id = `simon_${i}_${ii}`;
			input.className = `btn-check simon_${i} ${colours[ii].id}`;
			input.setAttribute("type", "radio");
			input.setAttribute("name", `simon_${i}`);
			input.setAttribute("autocomplete", "off");
			input.setAttribute("value", `${colours[ii].id}`)

			var label = document.createElement("label");
			label.className = `btn btn-outline-primary flex-grow-1 colour-${colours[ii].id}`;
			label.setAttribute("for", `simon_${i}_${ii}`);
			label.appendChild(document.createTextNode(`${colours[ii].name}`));

			group.appendChild(input);
			group.appendChild(label);
		}

		simon_inputs.appendChild(group);
	}
}