// E calcule a média de nota de cada aluno e imprima o seguinte resultado:

// Aluno: Tiago dos Santos - Matemática - Média Final: 5.9 - Status: Reprovado
// Aluno: Alex Carneiro - Matemática - Média Final: 9.9 - Status: Aprovado

// Regra de negócio:
// 1. Para calcular a média final, some as 4 notas e divida por 4 (média ponderada).
// 2. Para preencher o Status, utilize a seguinte regra:
//    Se Média Final < 6, Status = Reprovado, senão, Status = Aprovado

const media = 6;

const sala = [
  aluno = {
    nome: "Tiago dos Santos",
    disciplina: "Matemática",
    notas: [6.5, 4.3, 7.1, 5.0]
  },
  aluno = {
    nome: "Alex Carneiro",
    disciplina: "Matemática",
    notas: [7.5, 8.3, 9.1, 10.0]
  }
];

// console.log('Média: ' + media);
// console.log(sala); // imprime toda a sala
// console.log(sala[0]); // imprime o aluno 1

const aluno1 = sala[0];
const aluno2 = sala[1];

const mediaAluno1 = (aluno1.notas[0] + aluno1.notas[1] + aluno1.notas[2] + aluno1.notas[3]) / 4;
// console.log('Média aluno 1: ' + mediaAluno1);
var statusAluno1 = '???';

if (mediaAluno1 < media) { // se mediaAluno for menor que a media (6)
  statusAluno1 = 'Reprovado';
} else { // senao
  statusAluno1 = 'Aprovado';
}
// console.log(statusAluno1);

console.log(`Aluno: ${aluno1.nome} - ${aluno1.disciplina} - Média Final: ${mediaAluno1} - Status: ${statusAluno1}`);

// Repetindo para o aluno 2
const mediaAluno2 = (aluno2.notas[0] + aluno2.notas[1] + aluno2.notas[2] + aluno2.notas[3]) / 4;
var statusAluno2 = '???';

if (mediaAluno2 < media) {
  statusAluno2 = 'Reprovado';
} else {
  statusAluno2 = 'Aprovado';
}

console.log(`Aluno: ${aluno2.nome} - ${aluno2.disciplina} - Média Final: ${mediaAluno2} - Status: ${statusAluno2}`);