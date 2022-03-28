class Pessoa {
  #nome = "";
  #cpf = "";
  #sexo = "";

  constructor(nome, cpf, sexo){
    this.#nome = nome;
    this.#cpf = cpf;
    this.#sexo = sexo;
  }

  obterNome = function() {
    return this.#nome;
  }

  descrever = function () {
    console.log(this.#nome + " - " + this.#cpf);
  }
}

module.exports=Pessoa