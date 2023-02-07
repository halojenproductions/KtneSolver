import { showSolution, getById, visible } from '../utilities';

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

	let showSerial : boolean = false;
	let serialOdd : boolean =  getById("basic_s2").checked;
	let serialEven : boolean =  getById("basic_s1").checked;

	let cutWireLogic = (() => {
		switch (count.total) {
			case 3: {
				if (count.red == 0) {
					return cut.second;
				}
				if (lastwire() == colour.white) {
					return cut.last;
				}
				if (count.blue > 1) {
					return `${cut.last} ${colour.blue}`;
				} 
				return cut.last;
			}
			case 4: {
				if (count.red > 1) {
					showSerial = true;
					if (serialOdd) {
						return `${cut.last} ${colour.red}`;
					} 				
				}
				if (lastwire() == colour.yellow && count.red == 0) {
					return cut.first;
				} 
				if (count.blue == 1) {
					return cut.first;
				} 
				if (count.yellow > 1) {
					return cut.last;
				}
				return cut.second;				
			}
			case 5: {
				if (lastwire() == colour.black) {
					showSerial = true;
					if (serialOdd) {
						return cut.fourth;					
					}
				}
				if (count.red == 1 && count.yellow > 1) {
					return cut.first;
				} 
				if (count.black == 0) {
					return cut.second;
				}
				return cut.first;				
			}
			case 6: {
				if (count.yellow == 0) {				
					showSerial = true;
					if (serialOdd) {
						return cut.third;					
					}					
				}
				if (count.yellow == 1 && count.white > 1) {
					return cut.fourth;
				} 
				if (count.red == 0) {
					return cut.last;
				} 
				return cut.fourth;			
				
			}
			default: {
				return "";		
			}
		
		}
	})();

	visible(getById("basic_serial"), showSerial || serialOdd || serialEven);

	console.log(cutWireLogic);
	sol.innerHTML = cutWireLogic.toString();
	showSolution('Basic', cutWireLogic.length > 0);
}
