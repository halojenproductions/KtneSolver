import { getById } from '../utilities';

export function renderMemory(): void {
	const memoryForm = getById('MemoryForm');
	const attributes = [
		{ name: 'display', input: true },
		{ name: 'label', input: false },
		{ name: 'input', input: true },
	];

	for (let stage = 1; stage <= 5; stage++) {
		const row = document.createElement('div');
		row.id = `memory_stage_${stage}`		
		attributes.forEach(attribute => { 
			const group = document.createElement('div');
			group.className = 'btn-group btn-group-sm align-top';
			if (stage < 5) {
				group.classList.add("mb-1");
			}
			group.setAttribute('role', 'group');
			group.style.width = `${100 / (attributes.length)}%`;


			if (attribute.input) { 
				for (let value = 1; value <= 4; value++) {
					const inputId = `memory_${attribute.name}_${stage}_${value}`;
					const input = document.createElement('input');
					input.id = inputId;
					input.name = `memory_${attribute.name}_${stage}`;
					input.className = `btn-check memory_${attribute.name}_${stage}`;
					input.setAttribute('type', 'radio');					
					input.setAttribute('autocomplete', 'off');
					input.setAttribute('data-elementname', `${attribute.name}`);					
					input.setAttribute('data-elementstage', `${stage}`);
					input.setAttribute('data-elementvalue', `${value}`);
					input.value = value.toString();

					const label = document.createElement('label');
					label.className = 'btn btn-outline-primary';
					label.setAttribute('for', inputId);
					label.id = `memory_${attribute.name}_${stage}_${value}_label`;
					label.appendChild(document.createTextNode(value.toString()));

					group.appendChild(input);
					group.appendChild(label);
				}
			} else {
				const label = document.createElement('label');
				label.className = 'text-primary text-center w-100';
				label.id = `memory_${attribute.name}_${stage}`;				


				group.appendChild(label);
			}

			row.appendChild(group);
		});

		memoryForm.appendChild(row);
	}
}
