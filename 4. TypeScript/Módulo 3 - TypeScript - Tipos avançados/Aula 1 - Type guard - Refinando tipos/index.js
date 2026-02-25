"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(a, b) {
    return typeof a === 'number' && typeof b === 'number' ? a + b : `${a}${b}`;
}
console.log(add(1, 5));
console.log(add('a', 'b'));
//# sourceMappingURL=index.js.map