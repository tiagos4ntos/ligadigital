const Pessoa = require("./pessoa");
const generateRA = require("./utils");

class Aluno extends Pessoa {
  #ra = ""
  constructor(nome, cpf, sexo) {
    super(nome, cpf, sexo);
    this.#ra = generateRA();
  }

  obterRA = function () {
    console.log(this.#ra);
  }
}


let thalles = new Aluno("Thales", "122.122.122-09", "M");
console.log(thalles.descrever());
console.log(thalles.obterRA());
