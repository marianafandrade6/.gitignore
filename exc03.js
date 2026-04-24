const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 1. Entrada de Dados
rl.question("Digite a temperatura em Fahrenheit (°F): ", (answer) => {
    
    // Convertendo o texto da resposta para um número
    const fahrenheit = Number(answer);
    
    // 2. Processamento (Cálculo)
    // C = (F - 32) * 5/9
    const celsius = (fahrenheit - 32) * 5 / 9;

    // 3. Saída de Dados
    // Usamos .toFixed(1) para mostrar apenas uma casa decimal, como nos seus exemplos
    console.log(`Saída: ${celsius.toFixed(1)} (temperatura em graus Celsius)`);
    
    rl.close();
});
