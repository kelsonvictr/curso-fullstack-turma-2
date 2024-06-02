// quero uma arrow function chamada mudaTexto
// dentro dela quero uma variável titulo que recebe
// o valor document.getElementById("id-do-elemento")
// na outra linha chame: essa-variavel.innerText = "Novo texto"

//dentro do HTML conecte o scripts/script.js:
// <script src="scripts/script.js"></script>
// coloque essa importaçao antes de fechar o body

const mudaTexto = () => {
    let elementoParaMudarTexto = document.getElementById("titulo");
    elementoParaMudarTexto.innerText = "Mudooou!";
}