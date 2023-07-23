import { getById } from '../utilities';

const position = "Position";
const label = "Label";

interface ElementData {
	name: string | null;
	stage: number;
	value: number;
}

export function memory_solve(e: HTMLInputElement): void {
	clean_form();

	const element: ElementData = {
		name: e?.getAttribute("data-elementname") ?? null,
		stage: parseInt(e?.getAttribute("data-elementstage") ?? "0"),
		value: parseInt(e?.getAttribute("data-elementvalue") ?? "0")
	};

	if (element.name && element.stage && element.value) {
		if (element.name === "display") {
			handle_display(element);

		} else if (element.name === "input") {
			handle_inputs(element);

			//clears any inputs above this stage, and any labels that are affected by this change
			refresh_labels(element.stage);
		}
	}
}

function handle_inputs(element: ElementData) {
	let text = getById(`memory_label_${element.stage}`).textContent;

	if (text?.startsWith("Label")) {
		data_persistance(element.stage, position, element.value);
	} else if (text?.startsWith("Position")) {
		data_persistance(element.stage, label, element.value);
	}
}

function handle_display(element: ElementData) {
	clear_stage(element.stage);
	var number: number = 0;
	var type: string = "";
	switch (element.stage) {
		case 1: {
			switch (element.value) {
				case 1:
				case 2:
					type = position;
					number = 2;
					break;
				case 3:
					type = position;
					number = 3;
					break;
				case 4:
					type = position;
					number = 4;
					break;
				default:
					break;
			};
			break;
		}
		case 2: {
			switch (element.value) {
				case 1:
					type = label;
					number = 4;
					break;
				case 2:
				case 4:
					type = position;
					var data = getById("memory_stage_1").getAttribute("data-position");
					if (data == undefined) {
						console.log("stage 1 missing data");
						return;
					}
					number = parseInt(data);
					break;
				case 3:
					type = position;
					number = 1;
					break;
				default:
					break;
			};
			break;
		}
		case 3: {
			switch (element.value) {
				case 1:
					type = label;
					var data = getById("memory_stage_2").getAttribute("data-label");
					if (data == undefined) {
						console.log("stage 2 missing data");
						return;
					}
					number = parseInt(data);
					break;
				case 2:
					type = label;
					var data = getById("memory_stage_1").getAttribute("data-label");

					if (data == undefined) {
						console.log("stage 1 missing data");
						return;
					}
					number = parseInt(data);
					break;
				case 3:
					type = position;
					number = 3;
					break;
				case 4:
					type = label;
					number = 4;
					break;
				default:
					break;
			};
			break;
		}
		case 4: {
			switch (element.value) {
				case 1:
					type = position;
					var data = getById("memory_stage_1").getAttribute("data-position");
					if (data == undefined) {
						console.log("stage 1 missing data");
						return;
					}
					number = parseInt(data);
					break;
				case 2:
					type = position;
					number = 1;
					break;
				case 3:
				case 4:
					type = position;
					var data = getById("memory_stage_2").getAttribute("data-position");
					if (data == undefined) {
						console.log("stage 2 missing data");
						return;
					}
					number = parseInt(data);
					break;
				default:
					break;
			};
			break;
		}
		case 5: {
			switch (element.value) {
				case 1:
					type = label;
					var data = getById("memory_stage_1").getAttribute("data-label");
					if (data == undefined) {
						console.log("stage 1 missing data");
						return;
					}
					number = parseInt(data);
					break;
				case 2:
					type = label;
					var data = getById("memory_stage_2").getAttribute("data-label");
					if (data == undefined) {
						console.log("stage 2 missing data");
						return;
					}
					number = parseInt(data);
					break;
				case 3:
					type = label;
					var data = getById("memory_stage_4").getAttribute("data-label");
					if (data == undefined) {
						console.log("stage 4 missing data");
						return;
					}
					number = parseInt(data);
					break;
				case 4:
					type = label;
					var data = getById("memory_stage_3").getAttribute("data-label");
					if (data == undefined) {
						console.log("stage 3 missing data");
						return;
					}
					number = parseInt(data);
					break;
				default:
					break;
			};
			break;
		}
	}

	data_persistance(element.stage, type, number);
	getById(`memory_label_${element.stage}`).appendChild(document.createTextNode(`${type} ${number}`));
}

function data_persistance(stage: number, type: string, number: number) {
	var element = getById(`memory_stage_${stage}`);
	element.setAttribute(`data-${type.toLowerCase()}`, number.toString())
}

function clear_stage(stage: number) {
	getById(`memory_label_${stage}`).replaceChildren("");
	var inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(`.memory_input_${stage}`);
	if (inputs != null) {
		inputs.forEach((element) => {
			element.checked = false;
		});
	}

	var persistance = getById(`memory_stage_${stage}`)

	persistance.removeAttribute("data-label")
	persistance.removeAttribute("data-position")
}

function clean_form() {
	for (let i = 1; i <= 5; i++) {
		var display = document.querySelector(`.memory_display_${i}:checked`)
		if (display == undefined) {
			clear_stage(i);
		}
	}
}

function refresh_labels(currentStage: number) {
	for (let i = currentStage + 1; i <= 5; i++) {
		const display: HTMLInputElement | null = document.querySelector(`.memory_display_${i}:checked`);
		if (display) {
			let element: ElementData = {
				name: 'display',
				stage: i,
				value: parseInt(display.value)
			};

			handle_display(element);
		}
	}
}
