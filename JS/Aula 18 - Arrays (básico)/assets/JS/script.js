// posições      0       1         2
const alunos = ['Luiz', 'Helena', 'João']; // arrays são indexáveis. Ou seja, seus elementos podem ser acessados por meio de índice numérico

console.log(alunos);
console.log(alunos[0]); // para acessar o índice do array, o valor de sua posição deve ser colocado entre []

alunos[2] = 'Márcio'; // os valores do array podem ser modificados. para modificar deve ser indicado o índice do valor dentro do array
alunos[3]= 'Clarisse'; // uma das maneiras de adicionar um valor a um array é referenciando um índice ainda não ocupado e o valor que deseja atribuir

alunos.push('Otávio') // push é uma função nativa do JavaScript para adicionar um valor ao final do array sem precisar saber o seu tamanho
alunos.unshift('Daher'); // unshift é uma função nativa do JavaScript para adicionar um valor no começo do array sem precisar saber o seu tamanho

alunos.pop(); // pop é uma função nativa do JavaScript responsável por remover o último valor de um array. Nesse caso "Otávio", por ser o último índice
alunos.shift(); // shift é uma função nativa do JavaScript responsável por remover o primeiro valor de um array. Nesse caso "Daher", por ser o primeiro índice após executar a função unshift

delete alunos[1]; // também remove um valor do array, porém não altera os índices. Nesse caso "Helena" é removido por estar no índice "1" do array e seu valor é substituído por <1 empry item> com apontamento de undefined

console.log(alunos.slice(0, 1)); // slice retorna uma fátia do array. No primeiro valor antes da vírgula a posição de início e depois da vírgula seu fim, levando em consideração que a posição final não será selecionada e sim um indíce anterior

console.log(typeof alunos); // array é um objeto indexável
console.log(alunos instanceof Array); // instanceof Array verifica se os valores trabalhados são array
console.log(alunos.length); // .legth retorna a quantidade de valores que compoem o tamanho do array