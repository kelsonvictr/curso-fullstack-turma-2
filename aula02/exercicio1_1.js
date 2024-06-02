//Declare a variável GLOBAL para o nome do produto
var produto = "Cadeira";

// Declate a CONSTANTE global para o código do produto
const codigoProduto = "CAD123";

function exibirDetalhesProduto() {
    // Declarar a variável LOCAL para a categoria do produto
    let categoria = "Móveis";

    console.log(produto);
    console.log(categoria);
    console.log(codigoProduto);
    console.log(`O produto ${produto} tem a categoria ${categoria} e possui o código ${codigoProduto}`);
}

exibirDetalhesProduto();