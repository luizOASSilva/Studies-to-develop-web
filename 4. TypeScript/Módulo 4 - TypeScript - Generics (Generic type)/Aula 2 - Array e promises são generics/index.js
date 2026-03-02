var _a, _b, _c;
var documento = {
    titulo: 'O titulo',
    texto: 'O texto',
};
console.log((_a = documento.data) === null || _a === void 0 ? void 0 : _a.toDateString()); // o ensadeamento opcional é dado pela interrogação e permite testar se o valor buscado pode ser undefined. Quando utilizamos o "?" estamos dizendo que o valor pode ser undefined
console.log((_c = (_b = documento.data) === null || _b === void 0 ? void 0 : _b.toDateString()) !== null && _c !== void 0 ? _c : 'ixi, não existe data'); // retorna o valor da direita da expressão somente se a expressão da esquerda for undefined ou null
console.log(false !== null && false !== void 0 ? false : 'ixi, não existe data'); // false retorna o valor pois não é null nem undefined
// coalescência nula
