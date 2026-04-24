const readline = require ('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("Digite a distância percorrida (km): ", (distanciaInput) => {
    
    
    rl.question("Digite o consumo do veículo (km/l): ", (consumoInput) => {
        
        
        const distancia = Number(distanciaInput);
        const consumo = Number(consumoInput);

        
        const litrosGastos = distancia / consumo;

        
        console.log(`A quantidade de combustível gasta na viagem é de ${litrosGastos} litros.`);

        rl.close();
    });
});