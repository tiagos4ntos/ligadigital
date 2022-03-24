class Carro {
  
  constructor(marca, modelo, cor, ano){
    //propriedades
    this.marca = marca,
    this.modelo = modelo,
    this.cor = cor,
    this.ano = ano,
    this.velocidade = 0,
    this.ligado = false
  }

  situacao() {
    console.log(this.modelo + " (" + this.ligado + "): " + this.velocidade + " KM/H");
  }

  descrever() {
    console.log(JSON.stringify(this)); 
  }

  ligar() {
    console.log("Dando partida no carro...");
    this.ligado = true;
  }

  desligar() {
    console.log("Desligando o carro...");
    this.ligado = false;
  }

  acelerar(){
    console.log("Acelera Airton...");
    this.velocidade+=10;
  }

  frear() {
    console.log("Chiii deu ruim...");
    this.velocidade-=5;
  }
}

module.exports=Carro
