// Declare a variável global para o nome do aluno
var nomeAluno = "Maria";

// Declare a constante global para a matrícula do aluno
const matricula = "2023001";

// Função que contém a variável de escopo local para o curso do aluno
function obterInformacoesAluno() {
    // Declare a variável local para o curso do aluno
    let curso = "Engenharia";

    // Retorne uma string concatenada usando template literals
    return `${nomeAluno} está matriculada no curso de ${curso} com a matrícula ${matricula}.`;
}

// Imprima o resultado da função
console.log(obterInformacoesAluno());
