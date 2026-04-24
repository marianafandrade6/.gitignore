const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("Digite o primeiro número: ", (n1) => {
    rl.question("Digite o segundo número: ", (n2) => {
        rl.question("Digite o terceiro número: ", (n3) => {
            
            const num1 = Number(n1);
            const num2 = Number(n2);
            const num3 = Number(n3);

            
            const somaQuadrados = (num1 ** 2) + (num2 ** 2) + (num3 ** 2);

         
            console.log(`Resultado: ${somaQuadrados} (${num1}² + ${num2}² + ${num3}²)`);

            rl.close();
        });
    });
});