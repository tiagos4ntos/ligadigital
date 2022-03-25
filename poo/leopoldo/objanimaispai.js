class animais {

    constructor(filo, classe, ordem, familia, habitat, aceleracao){
        this.filo = filo,
        this.classe = classe,
        this.ordem = ordem,
        this.familia = familia,
        this.habitat = habitat,
        this.aceleracao = aceleracao,
        this.velocidade = 0.0,
        this.direcao = 0,
        this.posicao = 0,
        this.fome = false,
        this.sede = false,
        this.vivo = true
    }

    descrever() {
        console.log(JSON.stringify(this)); 
    }
    
    // defineDirecao(posfinal) {
    //     if (this.posicao < posfinal) {
    //         this.direcao = +1;
    //         console.log(">>===>>");
    //     } else if (this.posicao > posfinal) {
    //         this.direcao = -1;
    //         console.log("<<===<<");
    //     } else {
    //         this.direcao = 0;
    //     }
    // }

    // andar(posfinal) {
    //     while (this.velocidade < this.aceleracao) {
    //         this.defineDirecao(posfinal);
    //         this.velocidade += this.direcao;
    //     }
     
    // }

    inicio(posinit) {
        console.log("Uma... ");
        this.descrever();
        console.log("... estava em seu lugar.");
        this.posicao += posinit;
        console.log("(Posição: " + (this.posicao) + ")");
    }

    sentirSede() {
        this.sede = true;
        console.log("Então a ") + this.descrever() + console.log(" sentiu muita sede");
    }

    deslocamento(posfinal) {
        console.log("Para isso teria que andar " + posfinal + " metros")
        if (this.posicao < posfinal) {
            while (this.posicao < posfinal) { 
                this.posicao += 1;
                console.log(this.posicao);      
            }
        } else if (this.posicao > posfinal) {
            while (this.posicao > posfinal) { 
                this.posicao -= 1;
                console.log(this.posicao);      
            }
        }
        

    }


}

module.exports=animais