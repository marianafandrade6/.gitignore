const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("Insira um valor numérico inteiro: ", (answer) => {
    
  
    const num = parseInt(answer);

   
    const quadrado = num * num;

  
    console.log(`${quadrado} (${num} elevado ao quadrado)`);

    rl.close();
});