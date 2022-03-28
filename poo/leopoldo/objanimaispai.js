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
    
    inicio(posinit) {
        console.log("Em algum lugar das " + this.habitat + ", uma...");
        this.descrever();
        console.log("... estava ali, parada.");
        this.posicao += posinit;
        console.log("(Posição: " + this.posicao + ")");
    }

    sentirSede() {
        this.sede = true;
        console.log("Então a ")
        this.descrever();
        console.log(" sentiu muita sede.");
        console.log("(Sede: " + this.sede + ")")
    }

    sentirFome() {
        this.fome = true;
        console.log("Então a ")
        this.descrever();
        console.log(" sentiu muita fome.");
        console.log("(Fome: " + this.fome + ")")
    }

    beberAgua() {
        this.sede = false;
        console.log("Rapidamente a ")
        this.descrever();
        console.log(" bebeu àgua até saciar sua sede.");
        console.log("(Sede: " + this.sede + ")")
    }

    deslocamento(posfinal) {      
        if (this.posicao < posfinal) {
            let distancia = posfinal-this.posicao
            console.log("Para isso teria que andar " + distancia + " metros para a direita, até a Posição: " + posfinal + ".")
            while (this.posicao < posfinal) { 
                this.posicao += this.aceleracao;
                switch (posfinal-this.posicao) {
                    case (0):
                        console.log("Chegou!");
                        console.log("(Posição: " + this.posicao + ")");
                        break;
                    case (distancia*0.2):
                        console.log("Quase chegando...");
                        console.log("(Posição: " + this.posicao + ")");
                        break;
                    case (distancia*0.5):
                        console.log("Passou da metade do caminho...");
                        console.log("(Posição: " + this.posicao + ")");
                        break;
                    case (distancia-this.aceleracao):
                        console.log("E lá se foi...");
                        console.log("(Posição: " + this.posicao + ")");
                        break;                
                    default:
                        break;
                }                     
            }
        } else if (this.posicao > posfinal) {
            let distancia = this.posicao-posfinal
            console.log("Para isso teria que andar " + distancia + " metros para a esquerda, até a Posição: " + posfinal + ".")
            while (this.posicao > posfinal) { 
                this.posicao -= this.aceleracao;
                switch (this.posicao-posfinal) {
                    case (0):
                        console.log("Chegou!");
                        console.log("(Posição: " + this.posicao + ")");
                        break;
                    case (distancia*0.2):
                        console.log("Quase chegando...");
                        console.log("(Posição: " + this.posicao + ")");
                        break;
                    case (distancia*0.5):
                        console.log("Passou da metade do caminho...");
                        console.log("(Posição: " + this.posicao + ")");
                        break;
                    case (distancia-this.aceleracao):
                        console.log("E lá se foi...");
                        console.log("(Posição: " + this.posicao + ")");
                        break;                
                    default:
                        break;
                }      
            }
        } else {
            console.log("Para isso não precisaria andar, porque já estava na posição: " + posfinal + ".");
        }
    }

    fim(){
        console.log("Neste momento a onça olhou para a capivara e disse: '-Tenho foooome!'");
        console.log("A capivara imediatemente respondeu: '-#VemSerDev! Só tem fera!'");
        console.log("-------------------------- FIM! --------------------------");
    }
}

module.exports=animais

//Primeira tentativa de simular um vetor de movimento [X, Y] para executar um pulo (parábola)
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