export class Calculadora {
    constructor(public numero: number) {}

    add(n: number): this { // retorando a própria instância do método da classe
        this.numero += n;
        return this;
    }

    sub(n: number): this { // quando retornamos o this de uma função podemos uilizá-la em cadeia
        this.numero -= n;
        return this;
    }

    div(n: number): this { 
        this.numero /= n;
        return this;
    }

    mul(n: number): this { 
        this.numero *= n;
        return this;
    }
}

export class SubCalculadora extends Calculadora {
    pow(n: number) : this {
        this.numero **= n;
        return this;
    }
}

const calculadora = new Calculadora(10);
calculadora.add(5).mul(2);
console.log(calculadora);

const calculadora2 = new SubCalculadora(20); // quando retornamos this. subclasses herdam o this da classe pai, todos os métodos então serãa acessíveis por subCalculadora.

console.log(calculadora2.add(5).pow(2)); // subclasse agora conhece os métodos da classe pai e permite cadeia de métodos

// Builder - GoF
export class RequestBuilder {
    private method: 'get' | 'post' | null = null
    private url: string | null = null;

    setMethod(method: 'get' | 'post'): this {
        this.method = method;
        return this;
    } 

    setUrl(url: string): this {
        this.url = url;
        return this;
    }

    send(): void {
        console.log(`Enviando dados via ${this.method} para ${this.url}`);
    }
}

const request = new RequestBuilder();
request.setUrl('http://www.google.com').setMethod('post').send(); // cadeia de métodos possível por conta do this