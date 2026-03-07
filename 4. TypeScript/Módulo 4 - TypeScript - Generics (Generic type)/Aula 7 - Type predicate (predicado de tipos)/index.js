"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNumber = isNumber;
function isNumber(value) {
    return typeof value === 'number';
}
console.log(isNumber('123'));
console.log(isNumber(123));
