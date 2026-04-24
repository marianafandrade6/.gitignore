const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const COTACAO_DOLAR = 5.60;


rl.question("Digite o valor em dólar (US$): ", (answer) => {
    
    const valorDolar = parseFloat(answer);


    const valorReal = valorDolar * COTACAO_DOLAR;

  
    console.log(`O valor convertido em real é: R$ ${valorReal.toFixed(2)}`);

    rl.close();
});