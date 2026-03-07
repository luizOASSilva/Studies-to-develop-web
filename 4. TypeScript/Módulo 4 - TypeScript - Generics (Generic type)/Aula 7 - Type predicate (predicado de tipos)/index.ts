export function isNumber(value: unknown): /* boolean */ value is number /* toda vez que o valor for true o predicado infere o tipo number */ { // aqui o valor inferido do retorno é boolean e não um número
    return typeof value === 'number';
}

console.log(isNumber('123'));
console.log(isNumber(123));

export function soma<T>(...args: T[]): number {
    const retorno = args.reduce((sum, value) => {
        if(isNumber(sum) && isNumber(value)) { // a inferência de tipo só funciona no escopo. Apenas na declaração. Aqui o typescript infere como boolean, na chamada de isNumber() o valor é entendido como boleean 
            return sum + value;
        }
        return sum;
    }, 0);

    return retorno;
}

console.log(isNumber('123'));
console.log(isNumber(123));