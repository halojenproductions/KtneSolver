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