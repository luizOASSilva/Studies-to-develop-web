type Documento = {
    titulo: string;
    texto: string;
    data?: Date;
}

const documento: Documento = {
    titulo: 'O titulo',
    texto: 'O texto',
};

console.log(documento.data?.toDateString()); // o ensadeamento opcional é dado pela interrogação e permite testar se o valor buscado pode ser undefined. Quando utilizamos o "?" estamos dizendo que o valor pode ser undefined
console.log(documento.data?.toDateString() ?? 'ixi, não existe data'); // retorna o valor da direita da expressão somente se a expressão da esquerda for undefined ou null

// console.log(false ?? 'ixi, não existe data'); false retorna o valor "false" pois não é null nem undefined

// coalescência nula