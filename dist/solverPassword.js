"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.passwd_solve = void 0;
const passwdookups = [
    "about", "after", "again", "below", "could",
    "every", "first", "found", "great", "house",
    "large", "learn", "never", "other", "place",
    "plant", "point", "right", "small", "sound",
    "spell", "still", "study", "their", "there",
    "these", "thing", "think", "three", "water",
    "where", "which", "world", "would", "write",
];
function passwd_solve() {
    var inputs = [
        document.getElementById("passwd_letters1").value.toLowerCase().split(""),
        document.getElementById("passwd_letters2").value.toLowerCase().split(""),
        document.getElementById("passwd_letters3").value.toLowerCase().split(""),
        document.getElementById("passwd_letters4").value.toLowerCase().split(""),
        document.getElementById("passwd_letters5").value.toLowerCase().split(""),
    ];
    let matches = passwdookups.filter((lookupWord) => {
        let wordLetters = lookupWord.split("");
        let hasMatch = true;
        for (var i = 0; i < 5; i++) {
            hasMatch && (hasMatch = inputs[i].length === 0 || inputs[i].includes(wordLetters[i]));
        }
        return hasMatch;
    });
    document.getElementById("passwd_solution").innerHTML = matches.join("<br>");
    console.log(matches);
}
exports.passwd_solve = passwd_solve;
//# sourceMappingURL=solverPassword.js.map