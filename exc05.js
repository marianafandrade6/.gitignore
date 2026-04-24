const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 1. Entrada de Dados: Valor Original
rl.question("Digite o valor original da prestação: ", (valorOriginalInput) => {
    
    // Segunda entrada: Meses em atraso
    rl.question("Digite o número de meses em atraso: ", (mesesInput) => {
        
        // Terceira entrada: Taxa de juros
        rl.question("Digite a taxa de juros mensal (%): ", (taxaInput) => {
            
            const valorOriginal = Number(valorOriginalInput);
            const mesesAtraso = Number(mesesInput);
            const taxaJuros = Number(taxaInput);

            // 2. Processamento: Aplicando a fórmula
            // valor = valorOriginal * (1 + (taxaJuros / 100) * mesesAtraso)
            const valorFinal = valorOriginal * (1 + (taxaJuros / 100) * mesesAtraso);

            // 3. Saída de Dados
            console.log(`O valor da prestação em atraso é de ${valorFinal.toFixed(2)} reais.`);

            rl.close();
        });
    });
});