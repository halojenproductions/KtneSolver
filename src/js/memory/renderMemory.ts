import { getById } from '../utilities';

export function renderMemory(): void {	
	for (let i = 1; i <= 5; i++) {
		var memory_inputs = getById("MemoryForm");
		
		var row = document.createElement("div");
		row.className = `d-flex`;

		var attribute = [["display", "d", "btn-outline-primary"], ["text", "#", "btn-outline-secondary"], ["position", "p", "btn-outline-primary"]]
		for (let iii = 0; iii <= 2; iii++) {

			var group = document.createElement("div");
			group.className = `btn-group btn-group-sm align-top`;
			group.setAttribute("role", "group");

			for (let ii = 1; ii <= 4; ii++) {
				var input = document.createElement("input");
				input.id = `memory_${attribute[iii][0]}_${i}_${ii}`;
				input.className = `btn-check memory_${attribute[iii][0]} memory_${attribute[iii][0]}_${i}`;
				input.setAttribute("type", "radio");
				input.setAttribute("name", `memory_${attribute[iii][0]}_${i}`);
				input.setAttribute("autocomplete", "off");
				input.setAttribute("value", `${attribute[iii][1]}${ii}`);

				var label = document.createElement("label");
				label.className = `btn ${attribute[iii][2]}`;
				label.setAttribute("for", `memory_${attribute[iii][0]}_${i}_${ii}`);
				label.appendChild(document.createTextNode(`${attribute[iii][1]}${ii}`));
				label.id = `memory_${i}_${ii}_label`;

				group.appendChild(input);
				group.appendChild(label);
			}
			row.appendChild(group);
		}
		
		memory_inputs.appendChild(row);		
	}	
}