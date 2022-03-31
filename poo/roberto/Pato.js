const Ave =  require('./Ave')
class Pato extends Ave{
    //#tipo = "Pato";
    #som;

    constructor(especie){
        super(especie, "Pato");
        this.#som = "quá quá";
    }

    locomover(){
        return "Ok. Vou nadar/voar!"
    }

    get definicao(){
        return `${super.definicao} - Som: ${this.#som}`;
    }
}

module.exports=Pato