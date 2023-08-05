import { getById, showSolution, visible } from '../utilities';
import { wordsDictionary } from './dataWords';

export function words_solve(): void {
	const stage2Section = getById("stage2")

	var showStage2 = false;

	const stage1: HTMLInputElement | null = document.querySelector(".stage1:checked");
	const stage2: HTMLInputElement | null = document.querySelector(".stage2:checked");

	if (stage1) {
		const selectedWord = stage1?.value;
		var instruction: HTMLDivElement = getById("instruction");
		if (selectedWord !== undefined) {
			const position = wordsDictionary[selectedWord].description;
			if (position !== "") {
				console.log(position);
				instruction.innerHTML = position;
			} else {
				console.log("Position not found");
				instruction.innerHTML = "No position available";
			}
		}
		showStage2 = true;
	} else {
		if (stage2) {
			stage2.checked = false;
		}
	}

	const sol: HTMLDivElement = document.querySelector("#Words div.solution") as HTMLDivElement;
	var showStage1 = false;

	if (stage2?.checked) {

		const selectedWord = stage2?.value;
		if (selectedWord !== undefined) {
			const words = wordsDictionary[selectedWord].words;
			if (words !== "") {
				console.log(words);
				sol.innerHTML = words;
			} else {
				console.log("Word list not found");
				sol.innerHTML = "No word available";
			}
			showStage1 = true;
		}
	}

	visible(stage2Section, showStage2);
	showSolution("Words", showStage1)

}
