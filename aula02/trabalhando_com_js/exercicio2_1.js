// 1. Defina a função tradicional
function objetivoDeCarreira(carreira) {
    // Retorne a string concatenada usando template literals
    return `Meu objetivo de carreira é me tornar um ${carreira}`;
}

// 2. Defina a função usando arrow function
const objetivoDeCarreiraArrow = (carreira) => {
    // Retorne a string concatenada usando template literals
    return `Meu objetivo de carreira é me tornar um ${carreira}`;
}

// 3. Defina uma constante carreira fora das funções
const carreira = "Desenvolvedor Full Stack";

// 4. Chame ambas as funções e imprima os resultados no console
console.log(objetivoDeCarreira(carreira));
console.log(objetivoDeCarreiraArrow(carreira));
