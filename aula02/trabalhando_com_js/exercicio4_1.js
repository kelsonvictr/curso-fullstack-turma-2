// Defina um objeto literal chamado aluno
let aluno = {
    nome: "Maria",
    cpf: "12345678900",
    cidade: "São Paulo",
    notas: [8.5, 7.2, 9.0, 6.8]
};

// Imprima as propriedades nome, cpf e cidade do objeto aluno
console.log(`Nome: ${aluno.nome}`);
console.log(`CPF: ${aluno.cpf}`);
console.log(`Cidade: ${aluno.cidade}`);

// Imprima cada uma das notas do array notas
console.log(`A primeira nota do aluno é: ${aluno.notas[0]}`);
console.log(`A segunda nota do aluno é: ${aluno.notas[1]}`);
console.log(`A terceira nota do aluno é: ${aluno.notas[2]}`);
console.log(`A quarta nota do aluno é: ${aluno.notas[3]}`);

// Calcule a média das notas do aluno
const media = (aluno.notas[0] + aluno.notas[1] + aluno.notas[2] + aluno.notas[3]) / aluno.notas.length;
console.log(`A média do aluno é: ${media}`);

// Selecione uma nota aleatória do array notas
const notaAleatoria = aluno.notas[Math.floor(Math.random() * aluno.notas.length)];

// Converta a nota selecionada de uma escala de 0-10 para uma escala de 0-100
const notaConvertida = notaAleatoria * 10;
console.log(`A nota sorteada foi: ${notaAleatoria} e convertida para a escala de 0-100 é: ${notaConvertida}`);
