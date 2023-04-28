import { getById } from '../utilities';

export function renderMemory(): void {
	const memoryForm = getById('MemoryForm');
	const attributes = [
		{ name: 'display', input: true },
		{ name: 'label', input: false },
		{ name: 'input', input: true },
	];

	for (let i = 1; i <= 5; i++) { //i is the stage
		const row = document.createElement('div');
		row.id = `memory_stage_${i}`
		attributes.forEach(attribute => {
			const group = document.createElement('div');
			group.className = 'btn-group btn-group-sm align-top';
			if (i < 5) {
				group.classList.add("mb-1");
			}
			group.setAttribute('role', 'group');
			group.style.width = `${100 / (attributes.length)}%`;


			if (attribute.input) { //ii is the value
				for (let ii = 1; ii <= 4; ii++) {
					const inputId = `memory_${attribute.name}_${i}_${ii}`;
					const input = document.createElement('input');
					input.id = inputId;
					input.name = `memory_${attribute.name}_${i}`;
					input.className = `btn-check memory_${attribute.name}_${i}`;
					input.setAttribute('type', 'radio');
					input.setAttribute('autocomplete', 'off');
					input.setAttribute('data-elementname', `${attribute.name}`);
					input.setAttribute('data-elementstage', `${i}`);
					input.setAttribute('data-elementvalue', `${ii}`);
					input.value = ii.toString();

					const label = document.createElement('label');
					label.className = 'btn btn-outline-primary';
					label.setAttribute('for', inputId);
					label.id = `memory_${attribute.name}_${i}_${ii}_label`;
					label.appendChild(document.createTextNode(ii.toString()));

					group.appendChild(input);
					group.appendChild(label);
				}
			} else {
				const label = document.createElement('label');
				label.className = 'text-primary text-center w-100 pt-1';
				label.id = `memory_${attribute.name}_${i}`;


				group.appendChild(label);
			}

			row.appendChild(group);
		});

		memoryForm.appendChild(row);
	}
}
