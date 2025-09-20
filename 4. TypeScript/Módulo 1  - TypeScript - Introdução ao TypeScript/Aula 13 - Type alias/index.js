// tipos funcionam como um contrato. O tipo assume como o valor de uma variável / função / objeto ou outro se comportará
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var pessoa = {
    // todos os campos obrigatórios devem estar presentes
    nome: 'Luiz',
    idade: 20, // nome e idade devem estar presentes no objeto, pois são obrigatórios
    salario: 10000,
    // corPreferida: 'Laranja' -> errro pois laranja não está em nenhum os types setados com union types para CorPreferida
};
function setCorPreferida(pessoa, cor) {
    return __assign(__assign({}, pessoa), { corPreferida: cor }); // recriando objeto e setando corPreferida, que respeito o tipo de CorPreferida
}
console.log(setCorPreferida(pessoa, "Azul")); 
console.log(pessoa);
