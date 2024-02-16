class formaDeBolo{
    //este é um dos metodod, é usado como padrão para atribuir valores para dentro da classe 
    constructor(saborDaMassa, saborRecheio){
        this.saborDaMassa = saborDaMassa
        this.saborRecheio = saborRecheio
    }
}
let boloFesta = new formaDeBolo("massa de chocolate", "recheio de nutella")
console.log(boloFesta)