// Podemos tipar array com tipos genéricos Array<T> - T[] 
// T significa tipo genérico ou que aceita qualquer tipo em sua composição inclusive os próprios tipos criados
function somaArgs() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (ac, valor) { return ac + valor; });
} // o prórpio TypeScript inferiu que o retorno seria number
var result = somaArgs(12, 2); // tipo da variável já inferido pelo retorno da função
function concatenaArgs() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (ac, valor) { return ac + valor; });
}
var result2 = concatenaArgs('teste', 'testando');
console.log(result2); // texto concatenado
function toUpperCaseArgs() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.map(function (valor) { return valor.toUpperCase(); });
} // retorna um array de string
var result3 = toUpperCaseArgs('tá em maiúsculo', 'é pra estar também');
console.log(result3); // texto todo em upperCase
