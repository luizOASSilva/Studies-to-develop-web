// tuplas não existem em TypeScript, tuplas são listas com tamanhos definidos e valores específicos. Após a transpilação, tuplas viram arrays em javascript

const dadosClientes: [number, string]= [1, 'Luiz']; // definimos o tipo de cada posição, esta tupla é editável

console.log(dadosClientes);

dadosClientes[0] = 10 // podemos mudar os valores, mas esses deverão ser do tipo definido na tipagem da tupla
// dadosClientes[0] = 'teste' -> isso gerará erro

dadosClientes[1] = 'Márcio';

console.log(dadosClientes);

const dadosUsuario: [number, string, string?] = [1, 'Luiz']; // Podemos definir tipos opcionais, que podem ou não ser omitidos

// não podemos utilizar métodos de array em tuplas, por exemplo o pop() e o push()

// para tornar os valores da tupla imutáveis, devemos adicionar a palavra readonly na definição de tipo

const dadosReservas: readonly [string, boolean] = ['Luiz', false];

dadosReservas[0] = ''

// readonly array

const array1: readonly string[] = ['Luiz', 'Silva']; // arrays com valores imutáveis
const array2: ReadonlyArray<string> = ['Márcio', 'José'] // criando array imutável com template literals

