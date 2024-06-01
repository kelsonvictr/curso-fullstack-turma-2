// Defina um array chamado temperaturas que armazena 4 temperaturas em graus Celsius
const temperaturas = [25, 30, 15, 20];

// Imprima todas as temperaturas armazenadas no array
console.log(`As temperaturas armazenadas são: ${temperaturas}`);

// Selecione uma temperatura aleatória do array
const temperaturaAleatoria = temperaturas[Math.floor(Math.random() * temperaturas.length)];

// Converta a temperatura selecionada de Celsius para Fahrenheit
const temperaturaFahrenheit = (temperaturaAleatoria * 9/5) + 32;

// Imprima a temperatura original em Celsius e sua conversão para Fahrenheit
console.log(`A temperatura sorteada é ${temperaturaAleatoria}°C, que corresponde a ${temperaturaFahrenheit}°F.`);
