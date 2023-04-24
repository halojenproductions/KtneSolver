import { getById, showSolution, visible } from '../utilities';

export function button_solve(): void {
	let solution = { hold: false, click: false };
	let show = { batts: false, car: false, frk: false };

	const button_batteries = getById("button_batteries");
	const button_car = getById("button_car");
	const button_frk = getById("button_frk");

	const sol: HTMLDivElement = <HTMLDivElement>document.querySelector("#MissileButton div.solution");

	var state = {
		blue: getById("button_colour1")?.checked,
		white: getById("button_colour2")?.checked,
		yellow: getById("button_colour3")?.checked,
		red: getById("button_colour4")?.checked,
		abort: getById("button_word1")?.checked,
		detonate: getById("button_word2")?.checked,
		hold: getById("button_word3")?.checked,
		other: getById("button_word4")?.checked,
		battNone: getById("button_batts1")?.checked,
		battMoreThan1: getById("button_batts2")?.checked,
		battMoreThan2: getById("button_batts3")?.checked,
		carNo: getById("button_car1")?.checked,
		carYes: getById("button_car2")?.checked,
		frkNo: getById("button_frk1")?.checked,
		frkYes: getById("button_frk2")?.checked,
	};

	const colourInfoNeeded = () => !(state.blue || state.white || state.yellow || state.red);
	const wordInfoNeeded = () => !(state.abort || state.detonate || state.hold || state.other);
	const battInfoNeeded = () => show.batts && !(state.battNone || state.battMoreThan1 || state.battMoreThan2);
	const carInfoNeeded = () => show.car && !(state.carNo || state.carYes);
	const frkInfoNeeded = () => show.frk && !(state.frkNo || state.frkYes);
	const solutionFound = () =>
		!colourInfoNeeded() &&
		!wordInfoNeeded() &&
		!battInfoNeeded() &&
		!carInfoNeeded() &&
		!frkInfoNeeded() &&
		(solution.hold || solution.click);

	let next = true;

	if (!colourInfoNeeded() && !wordInfoNeeded()) {

		// 1
		if (state.blue && state.abort) {
			solution.hold = true;
			next = false;
		}

		// 2
		if (next && state.detonate) {
			show.batts = true;
			if (battInfoNeeded()) {
				next = false;
			} else if (state.battMoreThan1 || state.battMoreThan2) {
				solution.click = true;
				next = false;
			}
		}

		// 3
		if (next && state.white) {
			show.car = true;
			if (carInfoNeeded()) {
				next = false;
			} else if (state.carYes) {
				solution.hold = true;
				next = false;
			}
		}

		// 4
		if (next) {
			show.batts = true;
			if (battInfoNeeded()) {
				next = false;
			} else if (state.battMoreThan2) {
				show.frk = true;
				if (frkInfoNeeded()) {
					next = false;
				} else if (state.frkYes) {
					solution.click = true;
					next = false;
				}
			}
		}

		// 5
		if (next && state.yellow) {
			solution.hold = true;
			next = false;
		}

		// 6
		if (next && state.red && state.hold) {
			solution.click = true;
			next = false;
		}

		// 7
		if (next) {
			solution.hold = true;
			next = false; // Yeah, I know, it's not needed on the last one.
		}
	}

	visible(button_batteries, show.batts);
	visible(button_car, show.car);
	visible(button_frk, show.frk);

	if (!solutionFound()) {
		console.log("No solution");
		sol.innerHTML = "";
		showSolution('MissileButton', false);
	} else if (solution.click) {
		console.log("Click it");
		sol.innerHTML = "Click";
		showSolution('MissileButton');
	} else if (solution.hold) {
		console.log("Hold it");
		sol.innerHTML = `
				Hold<br>
				Blue strip: 4 <br>
				Yellow strip: 5 <br>
				Else: 1
			`;
		showSolution('MissileButton');
	}
}
