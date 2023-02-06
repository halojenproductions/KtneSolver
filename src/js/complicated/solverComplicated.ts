import { getById, visible } from '../utilities';

export function complicated_solve_many() {
	for (let i = 1; i <= 6; i++) {
		complicated_solve(`complicated_${i}`);
	}
}

export function complicated_solve(id: string): void {
	
	var complicated_batteries = getById("complicated_batteries");
	var complicated_serial = getById("complicated_serial");
	var complicated_parallel = getById("complicated_parallel");

	var state = {
		light: getById(`${id}_0`).checked,
		red: getById(`${id}_1`).checked,
		blue: getById(`${id}_2`).checked,
		star: getById(`${id}_3`).checked,
		batteries: getById("complicated_b2").checked,
		serial: getById("complicated_s1").checked,
		parallel: getById("complicated_p1").checked
	};
	const cut = (): boolean => {
		if (state.red) {
			if (state.blue) {
				if (state.star) {
					if (state.light) {
						return false;
					}
					return state.parallel;
				} else {
					return state.serial;
				}
			} else {
				if (state.star) {
					if (state.light) {
						return state.batteries;
					} else {
						return true;
					}
				} else {
					if (state.light) {
						return state.batteries;
					} else {
						return state.serial;
					}
				}
			}
		}
		if (state.blue) {
			if (state.star) {
				if (state.light) {
					return state.parallel;
				}
				return false;
			} else {
				if (state.light) {
					return state.parallel;
				} else {
					return state.serial;
				}
			}
		} else {
			if (state.star) {
				if (state.light) {
					return state.batteries;
				} else {
					return true;
				}
			} else {
				if (!state.light) {
					return true;
				}
			}
		}
		return false;
	}

	if (cut()) {
		console.log("Cut wire");
		getById(`${id}_4_label`).innerHTML = "Cut";
	} else {
		console.log("Leave wire");
		getById(`${id}_4_label`).innerHTML = "Leave";
	}

	var show = {
		batteries: false,
		serial: false,
		parallel: false
	};

	for (let i = 1; i <= 6; i++) {
		id = `complicated_${i}`;

		state = {
			light: getById(`${id}_0`).checked,
			red: getById(`${id}_1`).checked,
			blue: getById(`${id}_2`).checked,
			star: getById(`${id}_3`).checked,
			batteries: getById("complicated_b1").checked || getById("complicated_b2").checked,
			serial: getById("complicated_s1").checked || getById("complicated_s2").checked,
			parallel: getById("complicated_p1").checked || getById("complicated_p2").checked
		};

		if (state.batteries || (state.red && !state.blue && state.light) || (!state.red && !state.blue && state.light && state.star)) {
			show.batteries = true;
		}

		if (state.serial || ((state.red || state.blue) && !state.light && !state.star) || (state.red && state.blue && state.light && !state.star)) {
			show.serial = true;
		}

		if (state.parallel || (!state.red && state.blue && state.light) || (state.red && state.blue && !state.light && state.star)) {
			show.parallel = true;
		}
	}

	visible(complicated_batteries, show.batteries);
	visible(complicated_serial, show.serial);
	visible(complicated_parallel, show.parallel);
}