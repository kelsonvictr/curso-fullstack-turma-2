let aluno = {
    nome: "Maria",
    cpf: "123123123-12",
    cidade: "São Paulo",
    notas: [8.5, 7.2, 9.0, 6.8]
};

// Imprimir nome, cpf e cidade

console.log(`Nome: ${aluno.nome}`)
console.log(`CPF: ${aluno.cpf}`)
console.log(`Cidade: ${aluno.cidade}`)

// Imprimir as notas

console.log(`Nota 1: ${aluno.notas[0]}`);
console.log(`Nota 2: ${aluno.notas[1]}`);
console.log(`Nota 3: ${aluno.notas[2]}`);
console.log(`Nota 1: ${aluno.notas[3]}`);

// calculo da media
const media = (aluno.notas[0]+aluno.notas[1]+aluno.notas[2]+aluno.notas[3])/ aluno.notas.length;
console.log(`A média é: ${media.toFixed(2)}`);

// Selecionar uma nota aleatória
const notaAleatoria = aluno.notas[Math.floor(Math.random() * aluno.notas.length)];

// Converta a nota para a escala de 0 a 100
const notaConvertida = notaAleatoria * 10;
console.log(`A nota sorteada foi: ${notaAleatoria} e convertida para a escala de 0-100 é: ${notaConvertida}`);