import { getById } from '../utilities';

export function renderComplicated(): void {
	var attributes = [["Light", ""], ["Red", "colour-red"], ["Blue", "colour-blue"], ["Star", ""], ["Cut", "text-success disabled"]];
	for (let i = 1; i <= 6; i++) {
		var complicated_inputs = getById("complicated_inputs");

		var group = document.createElement("div");
		group.className = `btn-group-sm btn-group-vertical align-top`;
		if (i < 6) {
			group.classList.add("me-1");
		}
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

	var complicated_optional = getById("complicated_optional");

	var groups = 
		 [["batteries",["< 2 cells",">= 2 cells"]],
		["serial", ["Even serial","Odd serial"]],
		["parallel", ["Parallel Port","No Parallel Port"]]]
	;
	for (let iii = 0; iii <= groups.length - 1; iii++) {		
		var g = groups[iii][0].toString(); //todo: no gap between groups
		var group = document.createElement("div");
		group.className = "btn-group-sm btn-group-vertical align-top d-none";
		if (iii < groups.length) {
			group.classList.add("me-1");
		}

		group.setAttribute("role", "group");
		group.id = `complicated_${g}`;
		
		for (let iiii = 0; iiii <= 1; iiii++) {
			
			var x = g[0];
			var input = document.createElement("input");
			input.id = `complicated_${x}${iiii + 1}`;
			input.className = "btn-check";
			input.setAttribute("type", "radio");
			input.setAttribute("name", `complicated_${x}`);
			input.setAttribute("autocomplete", "off");

			var label = document.createElement("label");
			label.className = `btn btn-outline-primary`;
			label.setAttribute("for", `complicated_${x}${iiii + 1}`);			
			label.appendChild(document.createTextNode(`${groups[iii][1][iiii]}`));	

			group.appendChild(input);
			group.appendChild(label);
		}
		complicated_optional.appendChild(group);
	}
	
}