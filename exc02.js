const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Adicionada a aspa inicial antes de "Digite"
rl.question("Digite a temperatura em Fahrenheit (°F): ", (answer) => {
    let fahrenheit = Number(answer);
    
    // Fórmula de conversão: C = (F - 32) * 5/9
    let celsius = (fahrenheit - 32) * 5 / 9;

    // Exibindo o resultado com 2 casas decimais para ficar mais limpo
    console.log(`Temperatura em Celsius: ${celsius.toFixed(2)}°C`);
    
    rl.close();
});