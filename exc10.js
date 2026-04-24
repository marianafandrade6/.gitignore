const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("Insira o primeiro valor numérico inteiro (num1): ", (answer1) => {
    
   
    rl.question("Insira o segundo valor numérico inteiro (num2): ", (answer2) => {
        
        const num1 = parseInt(answer1);
        const num2 = parseInt(answer2);

        const diferenca = num1 - num2;

        
        console.log(`${diferenca} (${num1} - ${num2})`);

        rl.close();
    });
});