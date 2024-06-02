const mediaParaAprovacao = 7.00;
var notas = [7.5, 6.0, 7.12];
const media = ((notas[0]+notas[1]+notas[2])/notas.length).toFixed(2)
var statusNota;

if (media < mediaParaAprovacao) {
    statusNota = "REPROVADO";
} else {
    statusNota = "APROVADO";
}


console.log(`A primeira nota do aluno é ${notas[0]}, a segunda nota do aluno é ${notas[1]}, a terceira nota do aluno ${notas[2]}\n
a média do aluno é ${media}, portanto o aluno está ${statusNota}`);