"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hide = exports.show = exports.visible = void 0;
function visible(e, visible) {
    const className = "d-none";
    if (visible && e.classList.contains(className)) {
        e.classList.remove(className);
    }
    else if (!visible && !e.classList.contains(className)) {
        e.classList.add(className);
    }
}
exports.visible = visible;
function show(e) {
    e.classList.remove("d-none");
}
exports.show = show;
function hide(e) {
    e.classList.add("d-none");
}
exports.hide = hide;
//# sourceMappingURL=utilities.js.map