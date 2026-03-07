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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var objeto1 = {
    nome: 'Luiz',
    sobrenome: 'Silva',
    // idade: 30, Gera erro, pois o valor do atributo idade é number, e o valor decrito entre <> é string
};
var objeto2 = {
    nome: 'Luiz',
    sobrenome: 'Silva',
};
var objeto3 = {
    nome: 'Luiz',
    sobrenome: 'Silva',
    idade: '20',
};
var objeto4 = {
    nome: 'Luiz',
};
var objeto5 = {
    nome: 'Luiz',
    sobrenome: 'Silva',
    idade: '20',
};
var objeto6 = {
    nome: 'Luiz',
    sobrenome: 'Siva',
};
var accountMongo = {
    _id: 'adaasda2a2a32z23-23132-sada',
    name: 'Luiz',
    age: 20,
};
function mapAccount(accountMongo) {
    var _id = accountMongo._id, accountData = __rest(accountMongo, ["_id"]);
    return __assign(__assign({}, accountData), { id: _id });
}
var accountApi = mapAccount(accountMongo);
console.log(accountApi);
