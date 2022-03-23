const sala = [
  {
    nome: "Tiago dos Santos",
    disciplina: "Matemática",
    notas: [7, 7, 7, 0]
  },
  {
    nome: "Alex Carneiro",
    disciplina: "Matemática",
    notas: [5, 5, 5, 9]
  }
];

for (let index = 0; index < sala.length; index++) {
  var aluno = sala[index];
  var somaDasNotas = 0;
  for (let indexNota = 0; indexNota < aluno.notas.length; indexNota++) {
    somaDasNotas += aluno.notas[indexNota];
  }
  var mediaAluno = somaDasNotas / 4;
  console.log(`Aluno: ${aluno.nome} - ${aluno.disciplina} - Média Final: ${mediaAluno} - Status: ${mediaAluno >= 6 ? "Aprovado" : "Reprovado"}`);
}