import { getById, showSolution, visible } from '../utilities';
import { wordsDictionary } from './dataWords';

export function words_solve(e: HTMLInputElement): void {

	const stage1Input: HTMLInputElement | null = document.querySelector(".stage1:checked");
	const stage2Input: HTMLInputElement | null = document.querySelector(".stage2:checked");

	if (e?.classList.contains("stage1")) {
		if (stage2Input) {
			stage2Input.checked = false;
		}
	}

	const stage2Div = getById("stage2")

	var isStage2Visible = false;

	if (stage1Input) {
		const selectedWord = stage1Input?.value;
		var stage1Solution: HTMLDivElement = getById("stage1Solution");
		if (selectedWord !== undefined) {
			const position = wordsDictionary[selectedWord].description;
			if (position !== "") {
				console.log(position);
				stage1Solution.innerHTML = position;
			} else {
				console.log("Solution not found");
				stage1Solution.innerHTML = "No solution available";
			}
		}
		isStage2Visible = true;
	}

	const sol: HTMLDivElement = document.querySelector("#Words div.solution") as HTMLDivElement;
	var isSolutionVisible = false;

	if (stage2Input?.checked) {

		const selectedWord = stage2Input?.value;
		if (selectedWord !== undefined) {
			const words = wordsDictionary[selectedWord].words;
			if (words !== "") {
				console.log(words);
				sol.innerHTML = words;
			} else {
				console.log("List not found");
				sol.innerHTML = "No list available";
			}
			isSolutionVisible = true;
		}
	}

	visible(stage2Div, isStage2Visible);
	showSolution("Words", isSolutionVisible)

}
