import { passwd_solve } from './solverPassword';

export function setupPassword(): void {
	Array.from(document.getElementsByClassName("possible")).forEach((element) => {
		element.addEventListener("keyup", passwd_solve);
		element.addEventListener("keypress", ((event: KeyboardEvent) => {
			if ("1234567890".includes(event.key)) {
				event.preventDefault();
				event.stopPropagation();
			}
			if ("12345".includes(event.key)) {
				document.getElementById(`passwd_letters${event.key}`)?.focus();
			}
		}) as EventListener);
	});
	// Hook up the clear button so it solves after clearing, thus hiding the solution.
	document.querySelector("#Password button[type='reset']")
		?.addEventListener("click", () => setTimeout(passwd_solve));
}
