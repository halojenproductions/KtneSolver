export type ModuleId = "Basic" | "Complicated" | "Sequences" | "Keypad" | "Knobs" | "Memory" | "MissileButton" | "Mazes" | "Password" | "Simon" | "Words";

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
	var header = <HTMLDivElement>document.querySelector(`#${moduleId} .card-header`);
	let clearButton = document.createElement("button");
	clearButton.setAttribute("type", "reset");
	clearButton.setAttribute("form", `${moduleId}Form`);
	clearButton.className = "btn btn-sm btn-outline-secondary float-end";
	header.appendChild(clearButton);
}

export function icon(icon: string): SVGElement {
	let symbol: SVGElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	symbol.classList.add("bi");
	symbol.setAttribute("fill", "currentColor");
	symbol.setAttribute("aria-hidden", "true");
	symbol.setAttribute("width", "16");
	symbol.setAttribute("height", "16");

	let use: SVGUseElement = document.createElementNS('http://www.w3.org/2000/svg', "use");
	use.setAttributeNS("http://www.w3.org/1999/xlink", "href", `icons/bootstrap-icons.svg#${icon}`);

	symbol.appendChild(use);
	return symbol;
}
