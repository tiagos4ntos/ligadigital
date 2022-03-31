class Animal{
    #classificacao = "Animalia";
    #grupo;
    #especie;
    #tipo;

    constructor(grupo, especie, tipo){
        this.#grupo = grupo;
        this.#especie = especie;
        this.#tipo = tipo;
    }

    locomover(){
        return "Precisa implementar"
    };

    get definicao(){
        return `Classificação: ${this.#classificacao} - Grupo: ${this.#grupo} - Tipo: ${this.#tipo} - Espécie: ${this.#especie}`;
    }

}

module.exports=Animal