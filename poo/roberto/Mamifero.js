const Animal =  require('./Animal')

class Mamifero extends Animal{
    //#grupo = "Mamíferos";

    constructor(especie, tipo){
        super("Mamíferos", especie, tipo);
    }

}

module.exports=Mamifero