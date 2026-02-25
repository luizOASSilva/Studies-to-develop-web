type Veiculo = { 
    marca: string;
    ano: number;
}

type Car = {
    brand: Veiculo['marca']; // podemos usar a chave como outro tipo para espelhar
    year: Veiculo['ano']; // se ano estiver como string, year também 
    name: string;
}

const carro: Car = {
    brand: 'Ford',
    year: 2026, // '2026' gerará erro, pois ano em veículo está definido como number
    name: 'New Fiesta'
}