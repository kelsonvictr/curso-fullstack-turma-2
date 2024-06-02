const cpf = "123.123.123-12";
var nome = "Kelson";

function sobreNome() {
    let sobreNome = "Almeida";
    //console.log(sobreNome);
    return sobreNome;
}

console.log(nome);
console.log(sobreNome());
console.log(cpf);
console.log(`O nome é: ${nome}. O sobrenome é: ${sobreNome()}. O CPF é: ${cpf}`);
