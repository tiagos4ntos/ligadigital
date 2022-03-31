const Mamifero =  require('./Mamifero')
class Gato extends Mamifero{
    //#tipo = "Gato";
    #som;

    constructor(especie){
        super(especie, "Gato");
        this.#som = "miau";
    }

    locomover(){
        return "Ok. Vou andar/correr!"
    }

    get definicao(){
        return `${super.definicao} - Som: ${this.#som}`;
    }

}

module.exports=Gato