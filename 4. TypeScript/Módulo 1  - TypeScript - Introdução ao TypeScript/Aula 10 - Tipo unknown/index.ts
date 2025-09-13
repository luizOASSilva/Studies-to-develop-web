let x: any; // any permite qualquer tratativa
x = 100;
x = 'Luiz'; // permite que eu altere de number para string livremente, ou qualquer outro tipo
x = '10'
let y = 800

console.log(x + y); // ocorrerá a concatenação

let z: unknown; // unknown permite a mudança de tipo mas é mais fechado quanto a realização de operações, sendo mais seguro que any
z = 100;
z = 'Luiz'; // permite que eu altere de number para string livremente, ou qualquer outro tipo
z = '10'
let a = 800

console.log(z + y); // gera erro, pois unknown necessita de uma verificação de tipo para realizar a manipulação da variável

if(typeof z === 'number') console.log(z + y) // realizará o cálculo, pois após checagem o valor é considerado number