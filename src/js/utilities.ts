export type ModuleId = "Basic" | "Complicated" | "Keypad" | "Knobs" | "Memory" | "MissileButton" | "Password" | "Simon";

export class BuildColour {
	id: string;
	name: string;

	constructor(value: string) {
		this.id = value.toLowerCase();
		this.name = value;
	}
}

export const Colour = {
	Red: "Red",
	Blue: "Blue",
	Green: "Green",
	Yellow: "Yellow",
	White: "White",
	Black: "Black"
}

export function ToLowerArray(array: string[]): string[] {
	return array.map(e => {
		return e.toLowerCase();
	})
}

export function visible(e: HTMLInputElement, visible: boolean) {
	const className = "d-none";
	if (visible && e.classList.contains(className)) {
		e.classList.remove(className); // Show.
	} else if (!visible && !e.classList.contains(className)) {
		e.classList.add(className); // Hide.
	}
}

export function show(e: HTMLInputElement) {
	e.classList.remove("d-none"); // Show.
}

export function hide(e: HTMLInputElement) {
	e.classList.add("d-none"); // Hide.
}

export function showSolution(moduleId: ModuleId, visible: boolean = true): void {
	let targ: NodeListOf<Element> = document.querySelectorAll(`#${moduleId} .solution`);

	targ.forEach(el => {
		const className = "d-none";
		if (visible && el.classList.contains(className)) {
			el.classList.remove(className); // Show.
		} else if (!visible && !el.classList.contains(className)) {
			el.classList.add(className); // Hide.
		}
	});
}

export function getById(id: string): HTMLInputElement {
	return <HTMLInputElement>document.getElementById(id);
}

export function getSolutionDiv(moduleId: ModuleId): HTMLDivElement {
	return <HTMLDivElement>document.querySelector(`#${moduleId} div.solution`);
}


export function buttonDeselect(e: Event) {
	let targ = <HTMLLabelElement>e.target;
	if (getById(targ.htmlFor).checked) {
		getById(targ.htmlFor).checked = false;
		e.preventDefault();
	}
}

export function renderClearButton(moduleId: ModuleId) {
	let header = <HTMLDivElement>document.querySelector(`#${moduleId} .card-header`);

	let clearButton = document.createElement("button");
	clearButton.setAttribute("type", "reset");
	clearButton.setAttribute("form", `${moduleId}Form`);
	clearButton.className = "btn btn-sm btn-outline-secondary float-end";

	header.appendChild(clearButton);
}

/*export function renderInfo(moduleId: ModuleId) {
	let header = <HTMLDivElement>document.querySelector(`#${moduleId} .card-header`);

	let infoButton = document.createElement("a");
	infoButton.className = "  icon-link";
	infoButton.setAttribute("href", "#");
	//infoButton.setAttribute("type", "button");
	//infoButton.setAttribute("data-bs-toggle", "offcanvas2");
	//infoButton.setAttribute("data-bs-target", "#offcanvasScrolling2");
	//infoButton.setAttribute("aria-controls", "offcanvasScrolling2");

	let svg = document.createElement("svg");
	svg.classList.add("bi");
	svg.setAttribute("fill", "currentColor");
	svg.setAttribute("aria-hidden", "true");

	let use = document.createElement("use");
	use.setAttribute("xlink:href", "icons/bootstrap-icons.svg#info-circle");

	svg.appendChild(use);
	infoButton.appendChild(svg);
	header.appendChild(infoButton);
}*/