const readline = require ('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 1. Entrada de Dados: Primeiro pedimos a distância
rl.question("Digite a distância percorrida (km): ", (distanciaInput) => {
    
    // Agora, dentro da resposta da primeira, pedimos o consumo
    rl.question("Digite o consumo do veículo (km/l): ", (consumoInput) => {
        
        // Transformamos as entradas (que são texto) em números
        const distancia = Number(distanciaInput);
        const consumo = Number(consumoInput);

        // 2. Processamento: litros = distância / consumo
        const litrosGastos = distancia / consumo;

        // 3. Saída de Dados
        console.log(`A quantidade de combustível gasta na viagem é de ${litrosGastos} litros.`);

        rl.close();
    });
});