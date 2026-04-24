const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("Digite o comprimento da caixa: ", (comprimentoInput) => {
    
    
    rl.question("Digite a largura da caixa: ", (larguraInput) => {
        
       
        rl.question("Digite a altura da caixa: ", (alturaInput) => {
            
            const comprimento = Number(comprimentoInput);
            const largura = Number(larguraInput);
            const altura = Number(alturaInput);

            const volume = comprimento * largura * altura;

           
            console.log(`${volume} (volume da caixa retangular)`);

            rl.close();
        });
    });
});