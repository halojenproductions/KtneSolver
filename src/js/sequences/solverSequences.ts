import { getById } from '../utilities';

export function Sequences_solve() {	
	for (let i = 1; i <= 9; i++) {
		let id = `Sequences_${i}`;
		solveWire(id);
	}		
}

function solveWire(id: string): void {	
	const cut = (): boolean => {
		return false
		}	

	if (cut()) {		
		console.log("Cut wire");
		getById(`${id}_7_label`).innerHTML = "Cut";
	} else {
		console.log("Leave wire");
		getById(`${id}_7_label`).innerHTML = "Leave";
	}
}

