import { nome as nome2, sobrenome, idade, soma } from './modulo1'; // importando os componentes do módulo exportad
// as significa "como"
// para evitar a colisão de nomes de variáveis, pode-se utilizar "as", dessa maneira o valor exportado recebe outro nome de variável

import { falaOi, Animal } from './modulo2'; // importando função e classe exportadas pelo arquivo "modulo2.js"

import * as meuModulo from './modulo3'; // poode-se importar tudo que é exportado de uma vez de um módulo

import teste, { Pessoa } from './modulo3'; // quando importamos algo como default do lado do exportado, não necessita-se de chaves para o export
// podemos importar a função default e os demais itens por meio de "chaves {}"

const nome = 'Helena'; // agora a variável nome pode ser declarada

console.log(nome2, sobrenome, idade); // nome2 terá o valor importado do módulo
console.log(soma(5, 5));
console.log(nome); // saída = helena

falaOi(nome2, sobrenome); // utilizando a função importada de um módulo. Podemos enviar parâmetros dinâmicos, importados de outros módulos

const anim1 = new Animal('Ayla', 'Cachorro'); // criando uma instância da classe "Animal"

console.log(anim1); // um objeto animal foi criado

const pessoa1 = new meuModulo.Pessoa('Luiz', 80, 1.75); // desta maneira, criamos uma espécie de "instância" do módulo exportado, onde para acessar seus valores, usamos a notação de ponto

pessoa1.apresentaImc(); // utilizando o método get imc do objeto "Pessoa()"

const pessoa2 = new Pessoa('Helena', 65, 1.73);

console.log(pessoa2);

pessoa2.apresentaImc(); // utilizando o método no prototype de "pessoa2"

teste(); // executando a função importada por default
