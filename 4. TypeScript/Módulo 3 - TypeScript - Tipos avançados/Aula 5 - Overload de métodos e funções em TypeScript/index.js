var adder = function (x, y) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    if (args.length > 0) {
        return args.reduce(function (s, y) { return s + y; }, 0) + x + (y || 0);
    }
    else {
        return x + (y || 0);
    }
};
console.log(adder(1));
