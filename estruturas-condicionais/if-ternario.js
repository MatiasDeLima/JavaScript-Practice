// uma forma de usar if else simplificado

// form normal de fazer
var status = "";
var nota = 6;

if(nota > 7) {
    status = "Aprovado";
} else {
    status = "Reprovado"
}

console.log(status);


// simplificado if ternario
// ? = IF
// : = ELSE

var nota = 6;
var status = nota > 7 ? "Aprovado" : "Reprovado";

console.log(status);

// tamberm suporta multlipas condicoes
var mes = 11;
var messagem = (mes == 11 || mes == 12) ? "Promocao" : "Preco normal";
console.log(messagem);

// EXEMPLO PRATICO
var dia_semana = 5;

var status_loja = (dia_semana == 0 || dia_semana == 6) ? "Funcionarios apenas de sengunda a sexta" : "Loja aberta";

console.log(status_loja);
