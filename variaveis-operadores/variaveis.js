
// ## VAR ## //
// Escopo de Funcao

// Ao utilizar "var" conseguimos redeclarar uma mesma variável.
var programador = "Lucas Matias";
var programador = "Mateus Lima";
var pontuacao = 10;

console.log(`O programador: ${programador} tem uma pontuacao de: ${pontuacao}`);

// ## LET ## //
// Escopo de Bloco

// Já utilizando let isso não é possível e um erro vai ocorrer.
// Uncaught SyntaxError: Identifier 'nome' has already been declared
let nome = "Matias";
let nome = "Pedro";


// ## CONST ## //
// Escopo de Bloco porem nao pode mudar o valor

const nome = "Karlos";
const nome = "John";

console.log(nome);
