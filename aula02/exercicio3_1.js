// Define um array chamado temperaturas que armazena 4 temperaturas em Celcius
const temperaturas = [25, 30, 15, 20];

// Imprime todas as temperaturas do array
console.log(`As temperaturas armazenadas são: ${temperaturas}`);

//Sorteia uma das temperaturas do array acima
const temperaturaAleatoria = temperaturas[Math.floor(Math.random() * temperaturas.length)];

// Converte a temperatura para Fahrenheit
const temperaturaF = (temperaturaAleatoria * 9/5) + 32;

// Imprimo a temperatura em Celcius convertida para Fahrenheit
console.log(`A temperatura sorteada é ${temperaturaAleatoria}°C, que corresponde a ${temperaturaF}°F`);
