import { getById, hide } from '../utilities';
import { wordsDictionary } from './dataWords';

const RowWrap: number = 7;

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
	label.className = `btn btn-outline-primary`;
	label.setAttribute("for", `words_stage${stage}_${key}`);
	label.setAttribute("data-wordsCode", `${value.display}`);
	label.textContent = `${value.display}`;

	return [input, label];
}

export function renderWords(): void {
	var words_inputs = getById("WordsForm");

	let group = document.createElement("div");

	const filteredEntriesStage1 = Object.entries(wordsDictionary)
		.filter(([_, value]) => value.description !== "")
		.sort((a, b) => a[0].localeCompare(b[0]));


	filteredEntriesStage1.forEach(([key, value], index) => {
		const [input, label] = createWordElement(1, key, value);

		group.setAttribute("data-stage", "1");
		group.setAttribute("role", "group");
		group.className = "btn-group btn-group-sm d-flex";

		group.appendChild(input);
		group.appendChild(label);

		if (++index % RowWrap === 0 || index === filteredEntriesStage1.length) {
			words_inputs.appendChild(group);
			group = document.createElement("div");

		}
	});

	var stage2group = document.createElement("div");
	stage2group.id = "stage2";

	group = document.createElement("div");


	var stage1Solution = document.createElement("div");
	stage1Solution.className = "text-primary";
	stage1Solution.id = "stage1Solution"
	stage2group.appendChild(stage1Solution);

	const filteredEntriesStage2 = Object.entries(wordsDictionary)
		.filter(([_, value]) => value.words !== "")
		.sort((a, b) => a[0].localeCompare(b[0]));

	filteredEntriesStage2.forEach(([key, value], index) => {
		const [input, label] = createWordElement(2, key, value);

		group.setAttribute("role", "group");
		group.className = "btn-group btn-group-sm d-flex stage2";

		group.appendChild(input);
		group.appendChild(label);

		if (++index % RowWrap === 0 || index === filteredEntriesStage2.length) {
			stage2group.appendChild(group);
			group = document.createElement("div");
		}
	});
	words_inputs.appendChild(stage2group);

	const stage2Section = getById("stage2")
	hide(stage2Section);
}
