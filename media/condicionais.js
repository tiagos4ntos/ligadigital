var lampadaDoQuarto = false;
var lampadaDaSala = false;

lampadaDoQuarto = true;

console.log("Inicio Operador &&")

if ((lampadaDoQuarto === false) && (lampadaDaSala === false)) { 
  console.log("Estamos no escuro, ligue as lâmpadas do quarto e da sala!")
} else if (lampadaDoQuarto === false && lampadaDaSala === true) {
  console.log("Ligue a lâmpada do quarto, pois a lâmpada da sala já esta acesa!")
} else if (lampadaDoQuarto === true && lampadaDaSala === false) {
  console.log("Ligue a lâmpada da sala, pois a lâmpada do quarto já esta acesa!")
} else {
  console.log("Todas as lâmpadas acesas!")
}
console.log("Fim Operador &&")
console.log("--------")

console.log("Inicio Operador || Aninhado")

if ((lampadaDoQuarto === false) || (lampadaDaSala === false)) { 
  console.log("Estamos no escuro, ligue as lâmpadas do quarto e da sala!")
} else if (lampadaDoQuarto === false || lampadaDaSala === true) {
  console.log("Ligue a lâmpada do quarto, pois a lâmpada da sala já esta acesa!")
} else if (lampadaDoQuarto === true || lampadaDaSala === false) {
  console.log("Ligue a lâmpada da sala, pois a lâmpada do quarto já esta acesa!")
} else {
  console.log("Todas as lâmpadas acesas!")
}

console.log("Fim Operador || Aninhado")

console.log("--------")

console.log("Inicio Operador || separados")
if ((lampadaDoQuarto === false) || (lampadaDaSala === false)) { 
  console.log("Estamos no escuro, ligue as lâmpadas do quarto e da sala!")
}

if (lampadaDoQuarto === false || lampadaDaSala === true) {
  console.log("Ligue a lâmpada do quarto, pois a lâmpada da sala já esta acesa!")
}

if (lampadaDoQuarto === true || lampadaDaSala === false) {
  console.log("Ligue a lâmpada da sala, pois a lâmpada do quarto já esta acesa!")
} else {
  console.log("Todas as lâmpadas acesas!")
}

console.log("Fim")