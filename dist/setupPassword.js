"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupPassword = void 0;
const solverPassword_1 = require("./solverPassword");
function setupPassword() {
    Array.from(document.getElementsByClassName("possible")).forEach((element) => {
        element.addEventListener("keyup", solverPassword_1.passwd_solve);
        element.addEventListener("keypress", ((event) => {
            var _a;
            if ("1234567890".includes(event.key)) {
                event.preventDefault();
                event.stopPropagation();
            }
            if ("12345".includes(event.key)) {
                (_a = document.getElementById(`passwd_letters${event.key}`)) === null || _a === void 0 ? void 0 : _a.focus();
            }
        }));
    });
}
exports.setupPassword = setupPassword;
//# sourceMappingURL=setupPassword.js.map