// Exercício POO com animais
console.log("Exercício POO com animais\n");

const Gato = require('./Gato');
const gato = new Gato("Siamês");
console.log(gato.definicao);
console.log(`Ação: ${gato.locomover()}`);

console.log("\n");

const Pato = require('./Pato');
const pato = new Pato("Donald");
console.log(pato.definicao);
console.log(`Ação: ${pato.locomover()}`);

console.log("\n");
