export abstract class Discount { // classe abstrata obriga subclasse a implementar
    protected discount = 0;

    calculate(price: number): number {
        return price - price * this.discount;
    }
}

export class FiftyPercentDiscount extends Discount { // open
    discount = 0.5;

    calculate(price: number): number { // isso quebra o princípio de Liskov que diz que uma subclasse filha de uma classe pai, estendida, deve funcionar se trocada de lugar
        if(price < 0) {
            throw new Error('Preço não pode ser menor que 0'); // implementar uma nova função não faz sentido seguindo a LSP
        }

        return price - price * this.discount;
    }
}

export class NoDiscount extends Discount {
    calculate(price: number): number { // isso quebra o princípio de Liskov que diz que uma subclasse filha de uma classe pai, estendida, deve funcionar se trocada de lugar
        return price; // alterou o método calculate
    }
}
