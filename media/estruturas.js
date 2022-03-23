// numeros
// inteiros - numeros sem pontos decimais
var idade = 37;
console.log("idade (inteiro): " + idade);

// ponto flutuante (reais) - numeros com casas decimais
var altura = 1.74321234;
console.log("altura (real):" + altura.toFixed(2));

var dataNascimento = new Date(1984, 3, 27, 10, 35, 0, 0);
console.log("Data Nascimento (datetime)" + dataNascimento);

var notas = [6.75,    9,     8.45];
console.log("notas (array): " + notas);
console.log("notas (array) tamanho: " + notas.length);

var nome = "tiago dos";
console.log("nome (string): " + nome);
// console.log("posição do @ no nome: " + nome.indexOf("@", 0));
// console.log("posição do T no nome: " + nome.indexOf("T", 0));
// console.log("Tamanho antes: " + nome.length);
// nome = nome.replace(" ", "");
// //console.log("Replace ' ' por '': " + nome.replace(" ", ""));
// console.log("Tamanho depois: " + nome.length);
// console.log("Tamanho do nome: " + nome.toUpperCase());

var nomes = ["Tiago", "Luis", "Thales", "Samira", 
"Edna", "Vinicius", "Leopoldo", "Carlos", "Marlisson"];


nomes = nomes.sort().reverse();

for (let index = 0; index < nomes.length; index++) {
  console.log("Posição do Array: " + index)
  console.log("Conteudo na posição do Array: " + nomes[index])
}


