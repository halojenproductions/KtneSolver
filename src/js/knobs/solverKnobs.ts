import { getById, showSolution } from '../utilities';

export function knobs_solve(): void {
	let config = {
		top1: getById("knobs_1_1")?.checked,
		top2: getById("knobs_1_2")?.checked,
		top3: getById("knobs_1_3")?.checked,
		bottom1: getById("knobs_2_1")?.checked,
		bottom2: getById("knobs_2_2")?.checked,
		bottom3: getById("knobs_2_3")?.checked
	}

	const sol: HTMLDivElement = <HTMLDivElement>document.querySelector("#Knobs div.solution");

	let solution = "";

	if ((!config.top1 && config.top2 && config.top3 && config.bottom1 && !config.bottom2 && config.bottom3) ||
		(!config.top1 && config.top2 && !config.top3 && !config.bottom1 && config.bottom2 && config.bottom3)) {
		solution = "Up";
	}
	else if ((!config.top1 && !config.top2 && config.top3 && config.bottom1 && !config.bottom2 && config.bottom3) ||
		(!config.top1 && config.top2 && !config.top3 && !config.bottom1 && !config.bottom2 && config.bottom3)) {
		solution = "Down";
	}
	else if ((!config.top1 && config.top2 && !config.top3 && config.bottom1 && config.bottom2 && config.bottom3) ||
		(!config.top1 && config.top2 && !config.top3 && config.bottom1 && config.bottom2 && !config.bottom3)) {
		solution = "Left";
	}
	else if ((config.top1 && config.top2 && config.top3 && !config.bottom1 && config.bottom2 && !config.bottom3) ||
		(config.top1 && !config.top2 && !config.top3 && !config.bottom1 && config.bottom2 && !config.bottom3)) {
		solution = "Right";
	}
	else {
		solution = "";
	}

	if (solution.length > 0) {
		console.log(sol);
		sol.innerHTML = solution.toString();
		showSolution('Knobs');
	} else {
		console.log("No solution");
		sol.innerHTML = "";
		showSolution('Knobs', false);
	}
}