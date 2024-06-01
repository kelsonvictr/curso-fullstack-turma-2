// Crie um array de números de 1 a 100
const numeros = Array.from({ length: 100 }, (_, index) => index + 1);

// Use .map para transformar o array de números e imprimir os resultados
numeros.map(numero => {
    if (numero % 3 === 0 && numero % 5 === 0) {
        console.log('FizzBuzz');
    } else if (numero % 3 === 0) {
        console.log('Fizz');
    } else if (numero % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(numero);
    }
});
