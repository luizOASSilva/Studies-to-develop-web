// try e catch marcam um bloco de declarações para testar (try) e especifica uma resposta caso uma exceção seja lançada. "try" espera uma resposta positiva, caso reporte algum erro, é lançado à "catch"

try { // try tenta
    console.log(sum('teste', 10));
} catch (err) { // catch captura o erro passado por parâmetro
    console.log(err);
} 

function sum (x, y) { // função que realiza a soma de dois números
    if (typeof x !== 'number' || typeof y !== 'number') { // verifica se um dos dois valores é diferente do tipo number
        throw new Error('x e y precisam ser números');  // caso seja, retorna um throw error a function
    }
    return x + y;
}

try { // try tenta
    console.log(sum('teste', 10)); // caso "try" encontre um erro em sua execução, "try" é automaticamente abortado e "catch" é executado
} catch (err) { // catch captura o erro passado por parâmetro
    console.log(err);
} finally {
    console.log('Aqui é o finally') // independente de "try" ou de "catch", "finally" sempre é executado
}

// exemplo real de "try", "catch" e "finally"

try {
    console.log('Abre o documento');
    console.log('Encontra o erro'); 
} catch(err) {
    console.log('Trata o erro');
} finally {
    console.log('Fecha o documento para evitar bugs');
}
