let carroDoTiago = {
  //propriedades
  marca: "GM",
  modelo: "ONIX",
  cor: "Vermelho",
  ano: 2022,
  velocidade: 0,
  ligado: false,

  // ações
  ligar : function() {
    console.log("Dando partida no carro...");
    this.ligado = true;
  },

  desligar : function() {
    console.log("Desligando o carro...");
    this.ligado = false;
  },

  acelerar : function(){
    console.log("Acelera Airton...");
    this.velocidade++;
  },

  frear : function() {
    console.log("Chiii deu ruim...");
    this.velocidade--;
  }
};

console.log("carro.ligado:" + carroDoTiago.ligado);
carroDoTiago.ligar();
console.log("carroDoTiago.ligado:" + carroDoTiago.ligado);