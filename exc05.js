const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("Digite o valor original da prestação: ", (valorOriginalInput) => {
    
    
    rl.question("Digite o número de meses em atraso: ", (mesesInput) => {
        
        
        rl.question("Digite a taxa de juros mensal (%): ", (taxaInput) => {
            
            const valorOriginal = Number(valorOriginalInput);
            const mesesAtraso = Number(mesesInput);
            const taxaJuros = Number(taxaInput);

            
            const valorFinal = valorOriginal * (1 + (taxaJuros / 100) * mesesAtraso);

            
            console.log(`O valor da prestação em atraso é de ${valorFinal.toFixed(2)} reais.`);

            rl.close();
        });
    });
});