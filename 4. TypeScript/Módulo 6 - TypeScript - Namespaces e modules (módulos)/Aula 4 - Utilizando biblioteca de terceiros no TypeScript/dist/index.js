"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const module_1 = __importDefault(require("./module"));
const array = [100, 200, 300, 400];
console.log(module_1.default.sum(array));
console.log(module_1.default.min(array));
console.log(module_1.default.max(array));
console.log(module_1.default.mean(array));
console.log(module_1.default.mul(array));
//# sourceMappingURL=index.js.map