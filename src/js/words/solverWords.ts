import { getById, showSolution, show, hide } from '../utilities';

interface WordsDictionary {
	[key: string]: {
		display: string,
		description: string;
		words: string;
	};
}

export const wordsDictionary: WordsDictionary = {
	"blank": { display: "Blank", description: "Right middle", words: "WAIT, RIGHT, OKAY, MIDDLE, BLANK" },
	"done": { display: "Done", description: "", words: "SURE, UH HUH, NEXT, WHAT?, YOUR, UR, YOU'RE, HOLD, LIKE, YOU, U, YOU ARE, UH UH, DONE" },
	"first": { display: "First", description: "Right top", words: "LEFT, OKAY, YES, MIDDLE, NO, RIGHT, NOTHING, UHHH, WAIT, READY, BLANK, WHAT, PRESS, FIRST" },
	"hold": { display: "Hold", description: "", words: "YOU ARE, U, DONE, UH UH, YOU, UR, SURE, WHAT?, YOU'RE, NEXT, HOLD" },
	"left": { display: "Left", description: "", words: "RIGHT, LEFT" },
	"like": { display: "Like", description: "", words: "YOU'RE, NEXT, U, UR, HOLD, DONE, UH UH, WHAT?, UH HUH, YOU, LIKE" },
	"middle": { display: "Middle", description: "", words: "BLANK, READY, OKAY, WHAT, NOTHING, PRESS, NO, WAIT, LEFT, MIDDLE" },
	"next": { display: "Next", description: "", words: "WHAT?, UH HUH, UH UH, YOUR, HOLD, SURE, NEXT" },
	"no": { display: "No", description: "Right bottom", words: "BLANK, UHHH, WAIT, FIRST, WHAT, READY, RIGHT, YES, NOTHING, LEFT, PRESS, OKAY, NO" },
	"nothing": { display: "Nothing", description: "Left middle", words: "UHHH, RIGHT, OKAY, MIDDLE, YES, BLANK, NO, PRESS, LEFT, WHAT, WAIT, FIRST, NOTHING" },
	"okay": { display: "Okay", description: "Right top", words: "MIDDLE, NO, FIRST, YES, UHHH, NOTHING, WAIT, OKAY" },
	"press": { display: "Press", description: "", words: "RIGHT, MIDDLE, YES, READY, PRESS" },
	"ready": { display: "Ready", description: "", words: "YES, OKAY, WHAT, MIDDLE, LEFT, PRESS, RIGHT, BLANK, READY" },
	"right": { display: "Right", description: "", words: "YES, NOTHING, READY, PRESS, NO, WAIT, WHAT, RIGHT" },
	"sure": { display: "Sure", description: "", words: "You ARE, DONE, LIKE, YOU'RE, YOU, HOLD, UH HUH, UR, SURE" },
	"u": { display: "U", description: "", words: "UH HUH, SURE, NEXT, WHAT?, YOU'RE, UR, UH UH, DONE, U" },
	"uhhuh": { display: "Uh huh", description: "", words: "UH HUH" },
	"uhuh": { display: "Uh Uh", description: "", words: "UR, U, YOU ARE, YOU'RE, NEXT, UH UH" },
	"uhhh": { display: "Uhhh", description: "", words: "READY, NOTHING, LEFT, WHAT, OKAY, YES, RIGHT, NO, PRESS, BLANK, UHHH" },
	"ur": { display: "Ur", description: "Left top", words: "DONE, U, UR" },
	"wait": { display: "Wait", description: "", words: "UHHH, NO, BLANK, OKAY, YES, LEFT, FIRST, PRESS, WHAT, WAIT" },
	"what": { display: "What", description: "", words: "UHHH, WHAT" },
	"whatq": { display: "What?", description: "", words: "YOU, HOLD, YOU'RE, YOUR, U, DONE, UH UH, LIKE, YOU ARE, UH HUH, UR, NEXT, WHAT?" },
	"yes": { display: "Yes", description: "Left middle", words: "OKAY, RIGHT, UHHH, MIDDLE, FIRST, WHAT, PRESS, READY, NOTHING, YES" },
	"youare": { display: "You Are", description: "Right bottom", words: "YOUR, NEXT, LIKE, UH HUH, WHAT?, DONE, UH UH, HOLD, YOU, U, YOU'RE, SURE, UR, YOU ARE" },
	"you": { display: "You", description: "Right middle", words: "SURE, YOU ARE, YOUR, YOU'RE, NEXT, UH HUH, UR, HOLD, WHAT?, YOU" },
	"your": { display: "Your", description: "Right middle", words: "UH UH, YOU ARE, UH HUH, YOUR" },
	"youre": { display: "You're", description: "Right middle", words: "YOU, YOU'RE" },
	"c": { display: "C", description: "Right top", words: "" },
	"cee": { display: "Cee", description: "Right bottom", words: "" },
	"display": { display: "Display", description: "Right bottom", words: "" },
	"holdon": { display: "Hold On", description: "Right bottom", words: "" },
	"lead": { display: "Lead", description: "Right bottom", words: "" },
	"led": { display: "Led", description: "Left middle", words: "" },
	"leed": { display: "Leed", description: "Left bottom", words: "" },
	"read": { display: "Read", description: "Right middle", words: "" },
	"red": { display: "Red", description: "Right middle", words: "" },
	"reed": { display: "Reed", description: "Left bottom", words: "" },
	"says": { display: "Says", description: "Right Bottom", words: "" },
	"see": { display: "See", description: "Right bottom", words: "" },
	"their": { display: "Their", description: "Right middle", words: "" },
	"there": { display: "There", description: "Right bottom", words: "" },
	"theyare": { display: "They Are", description: "Left middle", words: "" },
	"theyre": { display: "They're", description: "Left bottom", words: "" },
	"space": { display: " ", description: "Left bottom", words: "" }
};

export function words_solve(): void {
	const stage2Section = getById("stage2")

	hide(stage2Section);

	const stage1: HTMLInputElement | null = document.querySelector(".stage1:checked");
	const stage2: HTMLInputElement | null = document.querySelector(".stage2:checked");

	if (stage1) {
		const selectedWord = stage1?.value;
		var instruction: HTMLDivElement = getById("instruction");
		if (selectedWord !== undefined) {
			const position = wordsDictionary[selectedWord].description;
			if (position !== "") {
				console.log(position);
				instruction.innerHTML = position;
			} else {
				console.log("Position not found");
				instruction.innerHTML = "No position available";
			}
		}
		show(stage2Section);
	} else {
		if (stage2) {
			stage2.checked = false;
		}
	}

	const sol: HTMLDivElement = document.querySelector("#Words div.solution") as HTMLDivElement;
	showSolution("Words", false)

	if (stage2?.checked) {

		const selectedWord = stage2?.value;
		if (selectedWord !== undefined) {
			const words = wordsDictionary[selectedWord].words;
			if (words !== "") {
				console.log(words);
				sol.innerHTML = words;
			} else {
				console.log("Word list not found");
				sol.innerHTML = "No word available";
			}
			showSolution("Words")
		}
	}

}
