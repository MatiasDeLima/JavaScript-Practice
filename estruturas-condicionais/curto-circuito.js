
// outra forma de simplificar o if else chamada de curto-circuito

var aprovado = true;

aprovado&&console.log("Parabens");

// no curto circuito nao temos else por isso o valor false e retornado se a condicao nao for atendida

const nome = "Lucas";

const nomeValido = nome.length > 0;

nomeValido && console.log(nome);