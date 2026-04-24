const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 1. Entrada de Dados
rl.question("Insira o valor para a variável A: ", (valorA) => {
    rl.question("Insira o valor para a variável B: ", (valorB) => {
        
        let A = valorA;
        let B = valorB;

        console.log(`Antes da troca - A = ${A}, B = ${B}`);

        // 2. Processamento (A Troca)
        // Usamos uma variável temporária para não perder o valor de A
        let temp = A; // Passo 1: Guarda o valor de A no copo vazio
        A = B;        // Passo 2: Coloca o valor de B dentro de A
        B = temp;     // Passo 3: Pega o valor que guardamos no temp e coloca em B

        // 3. Saída de Dados
        console.log(`Após a troca - A = ${A}, B = ${B}`);

        rl.close();
    });
});