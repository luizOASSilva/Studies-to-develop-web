type CoresObj = typeof coresObj; // pegando o type de coresObj e atribuindo a CoresObj
type CoresChaves = keyof CoresObj; // keyof pega as chaves de um tipo e as transforma em uma união de strings, por exemplo: "vermelho" | "verde" | "azul". Aora cores só aceita esses tipos

const coresObj = {
    vermelho: 'red',
    verde: 'green',
    azul: 'blue',
}

function traduzirCor(cor: CoresChaves, cores: CoresObj) { // agora a fução se torna segura, pois a cor escolhida somente pode ser uma cor definida no tipo de CoresOb
    return cores[cor]; // cor só pode ser um atributo do tipo CoresObj
}

console.log(traduzirCor('vermelho', coresObj));
