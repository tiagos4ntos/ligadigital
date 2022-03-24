function Carro(marca, modelo, cor, ano){
  //propriedades
  this.marca = marca,
  this.modelo = modelo,
  this.cor = cor,
  this.ano = ano,
  this.velocidade = 0,
  this.ligado = false
}


let ferrariDoTiago = new Carro("Ferrari", "F450", "Vermelho", "1990");
let fuscaDoTiago = new Carro("VW", "Fusca", "Amarelo", "1974");

console.log(JSON.stringify(ferrariDoTiago));
console.log(JSON.stringify(fuscaDoTiago));
