// IIFE(Immediately Invoked Function Expression) é uma função criada e executada imediatamente após a sua criação

(function () { // IIFE tem seu esxopo léxico e são encapsuladas por parênteses pois isso previne o acesso externo às variáveis declaradas no escopo da função e não polui o escopo global
    const nome = 'Luiz';
    console.log(nome);
})(); // JavaScript interpreta "()" como uma chamada para a função e a executa

// console.log(nome); ** gerará erro, pois a variável "nome" possui escopo de função 

const sobrenome = (function () { // assim como qualquer função seu valor de retorno pode ser atribuído a uma variável
    const sobrenome = 'Luiz';
    return sobrenome;
})(); 
console.log(sobrenome); // a saída é imediatamente executada

(function(x, y) { 
    result = x + y;
    console.log(result)
})(5, 10);
