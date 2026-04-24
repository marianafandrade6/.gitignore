const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("Insira o valor para a variável A: ", (valorA) => {
    rl.question("Insira o valor para a variável B: ", (valorB) => {
        
        let A = valorA;
        let B = valorB;

        console.log(`Antes da troca - A = ${A}, B = ${B}`);

        
        let temp = A; 
        A = B;        
        B = temp;    

        console.log(`Após a troca - A = ${A}, B = ${B}`);

        rl.close();
    });
});