import { getById, visible } from '../utilities';

interface Wire {
	red: boolean;
	blue: boolean;
	star: boolean;
	light: boolean;
}

interface Device {
	batteries: boolean;
	serial: boolean;
	parallel: boolean;
}

let need: Device = {
	batteries: false,
	serial: false,
	parallel: false,
};

export function complicated_solve() {
	need = {
		batteries: false,
		serial: false,
		parallel: false,
	};

	for (let i = 1; i <= 6; i++) {
		let id = `complicated_${i}`;
		solveWire(id);
	}
	visibleDeviceDetails();
}

function solveWire(id: string): void {
	const wire: Wire = {
		red: getById(`${id}_red`).checked,
		blue: getById(`${id}_blue`).checked,
		star: getById(`${id}_star`).checked,
		light: getById(`${id}_light`).checked,
	};

	const device: Device = {
		batteries: getById("complicated_b2").checked,
		serial: getById("complicated_s1").checked,
		parallel: getById("complicated_p1").checked,
	};

	const cut = (): boolean => {
		if (wire.red) {
			if (wire.blue) {
				if (wire.star) {
					if (wire.light) {
						return false;
					}
					need.parallel = true;
					return device.parallel;
				} else {
					need.serial = true;
					return device.serial;
				}
			} else {
				if (wire.star) {
					if (wire.light) {
						need.batteries = true;
						return device.batteries;
					} else {
						return true;
					}
				} else {
					if (wire.light) {
						need.batteries = true;
						return device.batteries;
					} else {
						need.serial = true;
						return device.serial;
					}
				}
			}
		}
		if (wire.blue) {
			if (wire.star) {
				if (wire.light) {
					need.parallel = true;
					return device.parallel;
				}
				return false;
			} else {
				if (wire.light) {
					need.parallel = true;
					return device.parallel;
				} else {
					need.serial = true;
					return device.serial;
				}
			}
		} else {
			if (wire.star) {
				if (wire.light) {
					need.batteries = true;
					return device.batteries;
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
	};

	const resultLabel = getById(`${id}_result_label`);
	if (cut()) {
		console.log("Cut wire");
		resultLabel.innerHTML = "Cut";
	} else {
		console.log("Leave wire");
		resultLabel.innerHTML = "Leave";
	}
}

function visibleDeviceDetails(): void {
	const complicated_batteries = getById("complicated_batteries");
	const complicated_serial = getById("complicated_serial");
	const complicated_parallel = getById("complicated_parallel");

	visible(complicated_batteries, false);
	visible(complicated_serial, false);
	visible(complicated_parallel, false);

	const device: Device = {
		batteries: getById("complicated_b1").checked || getById("complicated_b2").checked,
		serial: getById("complicated_s1").checked || getById("complicated_s2").checked,
		parallel: getById("complicated_p1").checked || getById("complicated_p2").checked,
	};

	if (device.batteries || need.batteries) {
		visible(complicated_batteries, true);
	}

	if (device.serial || need.serial) {
		visible(complicated_serial, true);
	}

	if (device.parallel || need.parallel) {
		visible(complicated_parallel, true);
	}
}
