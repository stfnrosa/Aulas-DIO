const { gets, print } = require('./funções-auxiliares');

let maiorValor = 0;

for (let i = 0; i < 5; i++) {
    const numeroSorteado = gets();
    if(numeroSorteado > maiorValor){
        maiorValor = numeroSorteado;
    }
    
}

print(maiorValor)