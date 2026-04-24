const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("Digite quatro números inteiros separados por espaço (ex: 1 2 3 4): ", (answer) => {
    
    
    const valores = answer.split(/\s+/).map(Number);
    
    if (valores.length !== 4) {
        console.log("Por favor, insira exatamente 4 números.");
        rl.close();
        return;
    }

    const [n1, n2, n3, n4] = valores;

    
    const adicao = [
        `${n1}+${n2}=${n1+n2}`, `${n1}+${n3}=${n1+n3}`, `${n1}+${n4}=${n1+n4}`,
        `${n2}+${n3}=${n2+n3}`, `${n2}+${n4}=${n2+n4}`, `${n3}+${n4}=${n3+n4}`
    ];

    
    const multiplicacao = [
        `${n1}x${n2}=${n1*n2}`, `${n1}x${n3}=${n1*n3}`, `${n1}x${n4}=${n1*n4}`,
        `${n2}x${n3}=${n2*n3}`, `${n2}x${n4}=${n2*n4}`, `${n3}x${n4}=${n3*n4}`
    ];

   
    console.log("\n--- RESULTADOS ---");
    console.log("Adições: " + adicao.join(", "));
    console.log("Multiplicações: " + multiplicacao.join(", "));

    rl.close();
});