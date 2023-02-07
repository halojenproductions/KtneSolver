import { showSolution } from '../utilities';

export function basic_solve(): void {
		const colour = {
		white: "white",
		yellow: "yellow",
		blue: "blue",
		red: "red",
		black: "black"
	};

	const cut = {
		last: "last",
		first: "first",
		second: "2nd",
		fourth: "4th",
		third: "3rd"
	};

	const getcount = (c: string): number => document.querySelectorAll(`.basicwires_${c}:checked`).length;

	let count = {
		red: getcount(colour.red),
		blue: getcount(colour.blue),
		yellow: getcount(colour.yellow),
		white: getcount(colour.white),
		black: getcount(colour.black),
		total: 0
	};

	const lastwire = () => {
		let w: NodeListOf<HTMLInputElement> = document.querySelectorAll('.basicwires:checked');
		return w[w.length - 1].value;
	}

	count.total = document.querySelectorAll(`.basicwires:checked`).length;

	const sol: HTMLDivElement = <HTMLDivElement>document.querySelector("#Basic div.solution"); // Could be a utility that takes the ID.

	let result : string[] = [];
	switch (count.total) {
		case 3: {
			if (count.red == 0) {
				result.push(cut.second);
			} else if (lastwire() == colour.white) {
				result.push(cut.last);
			} else if (count.blue > 1) {
				result.push(`${cut.last} ${colour.blue}`);
			} else {
				result.push(cut.last);
			}
			break;
		}
		case 4: {
			if (count.red > 1) {
				result.push(`Serial odd: ${cut.last} ${colour.red}. Else: `);
			}
			if (lastwire() == colour.yellow && count.red == 0) {
				result.push(cut.first);
			} else if (count.blue == 1) {
				result.push(cut.first);
			} else if (count.yellow > 1) {
				result.push(cut.last);
			} else {
				result.push(cut.second);
			}
			break;
		}
		case 5: {
			if (lastwire() == colour.black) {
				result.push(`Serial odd: ${cut.fourth}. Else: `);
			}
			if (count.red == 1 && count.yellow > 1) {
				result.push(cut.first);
			} else if (count.black == 0) {
				result.push(cut.second);
			} else {
				result.push(cut.first);
			}
			break;
		}
		case 6: {
			if (count.yellow == 0) {
				result.push(`Serial odd: ${cut.third}. Else: `);
			}
			if (count.yellow == 1 && count.white > 1) {
				result.push(cut.fourth);
			} else if (count.red == 0) {
				result.push(cut.last);
			} else {
				result.push(cut.fourth);
			}
			break;
		}
		default: {
			sol.innerHTML = "";			
		}
	}

	console.log(`${result.join("")}`);
	sol.innerHTML = result.join("");
	showSolution('Basic', result.length > 0);
}
