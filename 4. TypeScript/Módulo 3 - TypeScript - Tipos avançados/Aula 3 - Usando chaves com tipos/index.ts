type Veiculo = {
    marca: string;
    ano: string;
};

type Cor = {
    brand: Veiculo['marca']; // agora brand e year herdam os tipos de veículo
    year: Veiculo['ano'];
    name: string;
}

const carro: Cor = {
    brand: 'Ford',
    year: '2026', // se o tipo em veículo mudar, cor será afetada
    name: 'New Fiesta', 
}

console.log(carro);
