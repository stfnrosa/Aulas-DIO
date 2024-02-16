class Carros{
    nome;
    cor;
    fabricante;
    eficiencia;
    constructor(nome,cor,fabricante,kmPorLitros){
        this.nome = nome
        this.cor = cor
        this.fabricante = fabricante
        this.kmPorLitros =  kmPorLitros         
    }
    gastoPercurso(distancia,valorCombistivel){
        let valor = (distancia/this.kmPorLitros)*valorCombistivel
        return valor.toFixed(2)
    }  
    
}
const uno = new Carros("Uno","Prata","Fiat",12)
console.log(uno.gastoPercurso(70,4.99))
const celta = new Carros("Celta","Preto","Chevrolet", 13.8)
console.log(celta.gastoPercurso(70,4.99))