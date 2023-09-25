





var produto = "Smartphone";

switch(produto) {
    case "Smartphone":
        console.log("Produto: Smartphone");
        break;
    case "TV":
        console.log("Produto: TV");
    default: 
        console.log("Produto: Invalido");
        break;
}

var produto = "Smartphone";

// multiplas clausulas
switch(produto) {
    case "Smartphone":
    case "Celular":
    case "Telefone":
        console.log("Produto: Smartphone");
        break;
    case "TV":
        console.log("Produto: TV");
    default: 
        console.log("Produto: Invalido");
        break;
}



// exeplo pratico
var mes = "Janeiro";

switch(mes) {
    case "Janeiro":
    case "Fevereiro":
    case "Marco":
        console.log("Verao")
        break;
    case "Abril":
    case "Maio":
    case "Junho":
        console.log("Outono");
        break;
    case "Julho":
    case "Agosto":
    case "Setembro":
        console.log("Iverno");
        break
    case "Outubro":
    case "Novembro":
    case "Dezembro":
        console.log("Primavera");
        break;
    default:
        console.log("Mes invalido");
        break;
}