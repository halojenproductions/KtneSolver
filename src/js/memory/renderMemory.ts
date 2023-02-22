import { getById } from '../utilities';

export function renderMemory(): void {	
	for (let i = 1; i <= 5; i++) {
		var memory_inputs = getById("MemoryForm");
		
		var row = document.createElement("div");
		row.className = `d-flex`;

		var display = document.createElement("div");
		display.className = `btn-group align-top`;
		display.setAttribute("role", "group");

		for (let ii = 1; ii <= 4; ii++) {
			var input = document.createElement("input");
			input.id = `memory_display_${i}_${ii}`;
			input.className = "btn-check memory_button";
			input.setAttribute("type", "radio");
			input.setAttribute("name", `memory_display_${i}`);
			input.setAttribute("autocomplete", "off");

			var label = document.createElement("label");
			label.className = `btn btn-outline-primary`;
			label.setAttribute("for", `memory_display_${i}_${ii}`);
			label.appendChild(document.createTextNode(`#${ii}`));
			label.id = `memory_${i}_${ii}_label`;

			display.appendChild(input);
			display.appendChild(label);
		}
		row.appendChild(display);

		var position = document.createElement("div");
		position.className = `btn-group align-top`;
		position.setAttribute("role", "group");

		for (let ii = 1; ii <= 4; ii++) {
			var input = document.createElement("input");
			input.id = `memory_position_${i}_${ii}`;
			input.className = "btn-check memory_button";
			input.setAttribute("type", "radio");
			input.setAttribute("name", `memory_position_${i}`);
			input.setAttribute("autocomplete", "off");

			var label = document.createElement("label");
			label.className = `btn btn-outline-secondary`;
			label.setAttribute("for", `memory_position_${i}_${ii}`);
			label.appendChild(document.createTextNode(`p${ii}`));
			label.id = `memory_${i}_${ii}_label`;

			position.appendChild(input);
			position.appendChild(label);
		}
		row.appendChild(position)

		var solution = document.createElement("div");
		solution.className = `btn-group align-top`;
		solution.setAttribute("role", "group");

		var input = document.createElement("input");
		input.id = `memory_solution_${i}`;
		input.className = "btn-check memory_button disabled";
		input.setAttribute("type", "check");
		input.setAttribute("name", `memory_solution_${i}`);
		input.setAttribute("autocomplete", "off");

		var label = document.createElement("label");
		label.className = `btn btn-outline-tertiary`;
		label.setAttribute("for", `memory_solution_${i}`);
		label.appendChild(document.createTextNode("NaN")); //remove
		label.id = `memory_solution_${i}_label`;

		solution.appendChild(input);
		solution.appendChild(label);
		
		row.appendChild(solution)
		memory_inputs.appendChild(row);		
	}	
}