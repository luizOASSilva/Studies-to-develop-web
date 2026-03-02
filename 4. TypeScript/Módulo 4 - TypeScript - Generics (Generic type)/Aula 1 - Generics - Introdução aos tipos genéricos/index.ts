type FilterCallback<U> = ( // criando um tipo genérico que infere o tipo de acordo com o genérico passado
    value: U, // aqui os tipos se tornam flexíveis, então value e array podem ser do tipo passado na chamada do genérico
    index?: number,
    array?: U[],
) => boolean;

function meuFilter<T>(array: T[], callbackfn: FilterCallback<T>) : T[] { // realizando a tipagem forte dos argumentos da função. Aqui a inferência de tipo acontece de acordo com o valor passado, aceitando por exemplo, um array híbrido com string e number
    const novoArray: T[] = [];

    for (let i = 0; i< array.length; i++) {
        if(callbackfn(array[i])) {
            novoArray.push(array[i])
        }
    }

    return novoArray;
};

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayFiltradoOriginal = array.filter((value) => value < 5);

const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const meuArrayFiltradoOrigina2 = meuFilter(array2, (value) => value < 5);

console.log(meuArrayFiltradoOrigina2);