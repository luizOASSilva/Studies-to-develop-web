// tipo "any" representa a não tipagem. Em alguns casos o TypeScript não conseguirá inferir o tipo automaticamente. Nesse caso, junto a falta de segurança, por padrão a tipagem será any(qualquer valor poderá ser atibuído)

// exemplo

function showMessage(msg) { // essa função aceita qualquer valor em seu argumento
    return msg; // como retornamos o mesmo valor, o tipo de retorno inferido também se torna any
}

console.log(showMessage('aaa'));
console.log(showMessage(123));

//obs: "any" é utilizado apenas em último caso
