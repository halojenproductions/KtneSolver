import { getById, hide } from '../utilities';
import { wordsDictionary } from './dataWords';

const RowWrap: number = 4;

function createWordElement(stage: number, key: string, value: any) {
	let input = document.createElement("input");
	input.id = `words_stage${stage}_${key}`;
	input.className = `btn-check words stage${stage}`;
	input.setAttribute("type", "radio");
	input.setAttribute("name", `words${stage}`);
	input.setAttribute("stage", `${stage}`);
	input.setAttribute("autocomplete", "off");
	input.setAttribute("value", `${key}`);

	let label = document.createElement("label");
	label.className = `btn  col-2 btn-outline-primary`;
	label.setAttribute("for", `words_stage${stage}_${key}`);
	label.setAttribute("data-wordsCode", `${value.display}`);
	label.textContent = `${value.display}`;

	return [input, label];
}

export function renderWords(): void {
	var words_inputs = getById("WordsForm");

	createGroupElement(words_inputs, 1);

	var stage2group = document.createElement("div");
	stage2group.id = "stage2";

	createGroupElement(stage2group, 2);
	words_inputs.appendChild(stage2group);

	const stage2Section = getById("stage2")
	hide(stage2Section);
}

function createGroupElement(div: HTMLDivElement, stage: number) {
	let group = document.createElement("div");

	if (stage == 2) {

		var solution = document.createElement("div");
		solution.className = "text-primary fs-2";
		solution.id = "stage1Solution";

		div.appendChild(solution);

	}

	const filteredEntries = Object.entries(wordsDictionary)
		.filter(([_, value]) => (stage === 1 ? value.description !== "" : stage === 2 ? value.words !== "" : false))
		.sort((a, b) => a[0].localeCompare(b[0]));


	filteredEntries.forEach(([key, value], index) => {
		const [input, label] = createWordElement(stage, key, value);

		group.setAttribute("data-stage", `${stage}`);
		group.setAttribute("role", "group");
		group.className = `btn-group btn-group-sm  d-flex stage${stage}`;

		group.appendChild(input);
		group.appendChild(label);

		if (++index % RowWrap === 0 || index === filteredEntries.length) {
			div.appendChild(group);
			group = document.createElement("div");

		}
	});
	return group;
}


