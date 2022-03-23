var nome = "Leonardo";

switch (nome) {
  case "Tiago":
  case "Alex":
  case "Leonardo":
    console.log(nome + " -> aprendiz de professor (switch)");
    break;
  case "Cris":
  case "Hele":
    console.log(nome + " -> chefe da Liga Digital (switch)");
    break;
  default:
    console.log(nome + " -> aluno do vem.ser=dev (switch)")
    break;
}

if (nome == "Tiago" || nome == "Alex" || nome == "Leonardo") {
  console.log(nome + " -> aprendiz de professor (IF)");
} else if (nome == "Cris" || nome == "Hele") {
  console.log(nome + " -> chefe da Liga Digital (IF)");
} else {
  console.log(nome + " -> aluno do vem.ser=dev (IF)")
}