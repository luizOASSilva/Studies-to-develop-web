// enum é uma estrutura de dado não ordenada e um tipo exclusivo do TypeScript e utilizamos quando temos mais de uma opção
var Cores;
(function (Cores) {
    Cores[Cores["vermelho"] = 0] = "vermelho";
    Cores[Cores["azul"] = 1] = "azul";
    Cores[Cores["amarelo"] = 2] = "amarelo";
})(Cores || (Cores = {}));
console.log(Cores);
console.log(Cores.vermelho); // retorna a posição do enum
console.log(Cores[0]); // acessando a posição 0 do enum
var CoresDois;
(function (CoresDois) {
    CoresDois[CoresDois["vermelho"] = 5] = "vermelho";
    CoresDois[CoresDois["azul"] = 100] = "azul";
    CoresDois[CoresDois["amarelo"] = 200] = "amarelo";
    CoresDois[CoresDois["rosa"] = 201] = "rosa";
    CoresDois["roxo"] = "roxo";
    // laranja // não consegue definir o indice pois não entende sequenciais literais
})(CoresDois || (CoresDois = {}));
console.log(CoresDois.vermelho);
console.log(CoresDois[10]); // TypeScript desconhece o indice da tupla para alguns casos, por isso não gera erro ***** ATENÇÃO *****
console.log(CoresDois.roxo);
(function (CoresDois) {
    CoresDois[CoresDois["pretudo"] = 1] = "pretudo";
})(CoresDois || (CoresDois = {}));
console.log(CoresDois);
