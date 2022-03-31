const Animal =  require('./Animal')

class Ave extends Animal{
     //#grupo = "Ave";
    #patas;
    #asas;
    constructor(especie, tipo){
        super("Ave", especie, tipo);
        this.#patas = 2;
        this.#asas = 2;
    }

    get definicao(){
        return `${super.definicao} - Patas: ${this.#patas} - Asas: ${this.#asas}`;
    }

}

module.exports=Ave