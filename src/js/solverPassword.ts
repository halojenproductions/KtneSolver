import { getById } from './utilities';

const passwdookups: readonly string[] = [
	"about", "after", "again", "below", "could",
	"every", "first", "found", "great", "house",
	"large", "learn", "never", "other", "place",
	"plant", "point", "right", "small", "sound",
	"spell", "still", "study", "their", "there",
	"these", "thing", "think", "three", "water",
	"where", "which", "world", "would", "write",
];

export function passwd_solve(): void {
	var inputs = [
		getById("passwd_letters1").value.toLowerCase().split(""),
		getById("passwd_letters2").value.toLowerCase().split(""),
		getById("passwd_letters3").value.toLowerCase().split(""),
		getById("passwd_letters4").value.toLowerCase().split(""),
		getById("passwd_letters5").value.toLowerCase().split(""),
	];

	
	let matches = passwdookups.filter((lookupWord) => {
		let wordLetters = lookupWord.split("");

		let hasMatch = true;
		for (var i = 0; i < 5; i++) {
			hasMatch &&= inputs[i].length === 0 || inputs[i].includes(wordLetters[i]);
		}
		return hasMatch;
	});
	if (matches.length > 0) {
		getById("passwd_solution").innerHTML = matches.join("<br>");
		console.log(matches);
	} else {
		getById("passwd_solution").innerHTML = ""; 
		// TODO: Put the <hr> inside the solution div and hide the div when there's no solution.
	}
}

