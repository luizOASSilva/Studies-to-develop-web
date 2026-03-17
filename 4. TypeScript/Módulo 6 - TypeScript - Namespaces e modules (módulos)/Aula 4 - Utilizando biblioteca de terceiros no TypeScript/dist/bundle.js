var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define("module", ["require", "exports", "lodash"], function (require, exports, lodash_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    lodash_1 = __importDefault(lodash_1);
    lodash_1.default.mul = function (array) {
        return array.reduce((previousValue, currentValue) => previousValue * currentValue, 1);
    };
    exports.default = lodash_1.default;
});
define("index", ["require", "exports", "module"], function (require, exports, module_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    module_1 = __importDefault(module_1);
    const array = [100, 200, 300, 400];
    console.log(module_1.default.sum(array));
    console.log(module_1.default.min(array));
    console.log(module_1.default.max(array));
    console.log(module_1.default.mean(array));
    console.log(module_1.default.mul(array));
});
//# sourceMappingURL=bundle.js.map