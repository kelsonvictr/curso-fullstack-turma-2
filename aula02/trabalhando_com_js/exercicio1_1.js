// Declare a variável global para o nome do produto
var produto = "Cadeira";

// Declare a constante global para o código do produto
const codigoProduto = "CAD123";

// Função que contém a variável de escopo local para a categoria do produto
function exibirDetalhesProduto() {
    // Declare a variável local para a categoria do produto
    let categoria = "Móveis";

    // Imprime os detalhes do produto na ordem correta
    console.log(produto);
    console.log(categoria);
    console.log(codigoProduto);
}

// Chame a função para exibir os detalhes do produto
exibirDetalhesProduto();
