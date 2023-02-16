import { getById, visible } from '../utilities';

var need = {
	batteries: false,
	serial: false,
	parallel: false
};

export function complicated_solve() {
	for (let i = 1; i <= 6; i++) {
		let id = `complicated_${i}`;
		solveWire(id);
	}
	visibleBombDetails();	
}

function solveWire(id: string): void {	
	var wire = {
		light: getById(`${id}_0`).checked,
		red: getById(`${id}_1`).checked,
		blue: getById(`${id}_2`).checked,
		star: getById(`${id}_3`).checked
	};

	var bomb = {
		batteries: getById("complicated_b2").checked,
		serial: getById("complicated_s1").checked,
		parallel: getById("complicated_p1").checked
	};

	const cut = (): boolean => {
		if (wire.red) {
			if (wire.blue) {
				if (wire.star) {
					if (wire.light) {
						return false;
					}
					need.parallel = true;
					return bomb.parallel;
				} else {
					need.serial = true;
					return bomb.serial;
				}
			} else {
				if (wire.star) {
					if (wire.light) {
						need.batteries = true
						return bomb.batteries;
					} else {
						return true;
					}
				} else {
					if (wire.light) {
						need.batteries = true
						return bomb.batteries;
					} else {
						need.serial = true;
						return bomb.serial;
					}
				}
			}
		}
		if (wire.blue) {
			if (wire.star) {
				if (wire.light) {
					need.parallel = true;
					return bomb.parallel;
				}
				return false;
			} else {
				if (wire.light) {
					need.parallel = true;
					return bomb.parallel;
				} else {
					need.serial = true;
					return bomb.serial;
				}
			}
		} else {
			if (wire.star) {
				if (wire.light) {
					need.batteries = true
					return bomb.batteries;
				} else {
					return true;
				}
			} else {
				if (!wire.light) {
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
}

function visibleBombDetails () : void {
	var complicated_batteries = getById("complicated_batteries");
	var complicated_serial = getById("complicated_serial");
	var complicated_parallel = getById("complicated_parallel");

	visible(complicated_batteries, false);
	visible(complicated_serial, false);
	visible(complicated_parallel, false);

	let bomb = {	
		batteries: getById("complicated_b1").checked || getById("complicated_b2").checked,
		serial: getById("complicated_s1").checked || getById("complicated_s2").checked,
		parallel: getById("complicated_p1").checked || getById("complicated_p2").checked
	};

	if (bomb.batteries || need.batteries) {
		visible(complicated_batteries, true);
	}

	if (bomb.serial || need.serial) {
		visible(complicated_serial, true);
	}

	if (bomb.parallel || need.parallel) {
		visible(complicated_parallel, true);
	}	
}