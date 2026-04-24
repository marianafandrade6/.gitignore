const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const COTACAO_DOLAR = 5.60;


rl.question("Digite o valor em real (R$): ", (answer) => {
    
    const valorReal = parseFloat(answer);

    
    const valorDolar = valorReal / COTACAO_DOLAR;

    
    console.log(`O valor convertido em dólar é: US$ ${valorDolar.toFixed(2)}`);

    rl.close();
});