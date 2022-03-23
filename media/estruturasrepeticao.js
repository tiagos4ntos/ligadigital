console.log("estrutura While:")
var numero = 2;
while (numero >= 0) {
  if (numero != 0) {
    switch ((numero % 2) == 0) {
      case true:
        console.log(numero + " -> PAR")
        break;
      case false:
        console.log(numero + " -> IMPAR")
        break;
      default:
        console.log("Número não identificado");
        break;
    }
  }
  numero = numero - 1;
}

console.log("estrutura For:")

var notas = [];
notas.length = 3;

notas.push(10);
notas.push(7);
notas.push(2);
notas.push(10);

console.log(notas);

for (let index = 0; index < notas.length; index++) {
    console.log("indice: " + index + " - Nota -> " + notas[index]);
}
