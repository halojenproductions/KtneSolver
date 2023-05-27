import { showSolution } from '../utilities';

interface WordsDictionary {
	[key: string]: {
	  description: string;
	  words: string;
	};
  }
  
  const wordsDictionary: WordsDictionary = {
  "blank": { description: "Right middle", words: "WAIT, RIGHT, OKAY, MIDDLE, BLANK" },
  "done": { description: "", words: "SURE, UH HUH, NEXT, WHAT?, YOUR, UR, YOU'RE, HOLD, LIKE, YOU, U, YOU ARE, UH UH, DONE" },
  "first": { description: "Right top", words: "LEFT, OKAY, YES, MIDDLE, NO, RIGHT, NOTHING, UHHH, WAIT, READY, BLANK, WHAT, PRESS, FIRST" },
  "hold": { description: "", words: "YOU ARE, U, DONE, UH UH, YOU, UR, SURE, WHAT?, YOU'RE, NEXT, HOLD" },
  "left": { description: "", words: "RIGHT, LEFT" },
  "like": { description: "", words: "YOU'RE, NEXT, U, UR, HOLD, DONE, UH UH, WHAT?, UH HUH, YOU, LIKE" },
  "middle": { description: "", words: "BLANK, READY, OKAY, WHAT, NOTHING, PRESS, NO, WAIT, LEFT, MIDDLE" },
  "next": { description: "", words: "WHAT?, UH HUH, UH UH, YOUR, HOLD, SURE, NEXT" },
  "no": { description: "Right bottom", words: "BLANK, UHHH, WAIT, FIRST, WHAT, READY, RIGHT, YES, NOTHING, LEFT, PRESS, OKAY, NO" },
  "nothing": { description: "Left middle", words: "UHHH, RIGHT, OKAY, MIDDLE, YES, BLANK, NO, PRESS, LEFT, WHAT, WAIT, FIRST, NOTHING" },
  "okay": { description: "Right top", words: "MIDDLE, NO, FIRST, YES, UHHH, NOTHING, WAIT, OKAY" },
  "press": { description: "", words: "RIGHT, MIDDLE, YES, READY, PRESS" },
  "ready": { description: "", words: "YES, OKAY, WHAT, MIDDLE, LEFT, PRESS, RIGHT, BLANK, READY" },
  "right": { description: "", words: "YES, NOTHING, READY, PRESS, NO, WAIT, WHAT, RIGHT" },
  "sure": { description: "", words: "E, DONE, LIKE, YOU'RE, YOU, HOLD, UH HUH, UR, SURE" },
  "u": { description: "", words: "UH HUH, SURE, NEXT, WHAT?, YOU'RE, UR, UH UH, DONE, U" },
  "uhhuh": { description: "", words: "UH HUH" },
  "uhuh": { description: "", words: "UR, U, YOU ARE, YOU'RE, NEXT, UH UH" },
  "uhhh": { description: "", words: "READY, NOTHING, LEFT, WHAT, OKAY, YES, RIGHT, NO, PRESS, BLANK, UHHH" },
  "ur": { description: "Left top", words: "DONE, U, UR" },
  "wait": { description: "", words: "UHHH, NO, BLANK, OKAY, YES, LEFT, FIRST, PRESS, WHAT, WAIT" },
  "what": { description: "", words: "UHHH, WHAT" },
  "whatq": { description: "", words: "YOU, HOLD, YOU'RE, YOUR, U, DONE, UH UH, LIKE, YOU ARE, UH HUH, UR, NEXT, WHAT?" },
  "yes": { description: "Left middle", words: "OKAY, RIGHT, UHHH, MIDDLE, FIRST, WHAT, PRESS, READY, NOTHING, YES" },
  "youare": { description: "Right bottom", words: "YOUR, NEXT, LIKE, UH HUH, WHAT?, DONE, UH UH, HOLD, YOU, U, YOU'RE, SURE, UR, YOU ARE" },
  "you": { description: "Right middle", words: "SURE, YOU ARE, YOUR, YOU'RE, NEXT, UH HUH, UR, HOLD, WHAT?, YOU" },
  "your": { description: "Right middle", words: "UH UH, YOU ARE, UH HUH, YOUR" },
  "youre": { description: "Right middle", words: "YOU, YOU'RE" },
  "c": { description: "Right top", words: "" },
  "cee": { description: "Right bottom", words: "" },
  "display": { description: "Right bottom", words: "" },
  "holdon": { description: "Right bottom", words: "" },
  "lead": { description: "Right bottom", words: "" },
  "led": { description: "Left Middle", words: "" },
  "leed": { description: "Left bottom", words: "" },
  "read": { description: "Right middle", words: "" },
  "red": { description: "Right middle", words: "" },
  "reed": { description: "Left bottom", words: "" },
  "says": { description: "Right Bottom", words: "" },
  "see": { description: "Right bottom", words: "" },
  "their": { description: "Right middle", words: "" },
  "there": { description: "Right bottom", words: "" },
  "theyare": { description: "Left middle", words: "" },
  "theyre": { description: "Left bottom", words: "" },
  "space": { description: "Left bottom", words: "" }
};

export function words_solve(): void {
  const stage: HTMLInputElement | null = document.querySelector(".words_stage:checked"); // ["View", "Push"]
  const word: HTMLInputElement | null = document.querySelector(".words_display:checked");

  const sol: HTMLDivElement = document.querySelector("#Words div.solution") as HTMLDivElement;
  showSolution('Words', false);

  if (stage?.value === "View") {
    const selectedWord = word?.value;
    if (selectedWord !== undefined) {
      const position = wordsDictionary[selectedWord].description;
      if (position !== "") {
        console.log(position);
        sol.innerHTML = position;
      } else {
        console.log("Position not found");
        sol.innerHTML = "No position available";
      }
	  sol.classList.add("fs-2"); 
      showSolution('Words', true);
    }
  } else if (stage?.value === "Push") {
    const selectedWord = word?.value;
    if (selectedWord !== undefined) {
      const words = wordsDictionary[selectedWord].words;
      if (words !== "") {
        console.log(words);
        sol.innerHTML = words;
      } else {
        console.log("Word list not found");
        sol.innerHTML = "No word available";
      }
	  sol.classList.remove("fs-2"); 
      showSolution('Words', true);
    }
  }
}
