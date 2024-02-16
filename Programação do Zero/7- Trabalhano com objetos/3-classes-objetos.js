class formaDeBolo{
    constructor(saborDaMassa, saborRecheio){
        this.saborDaMassa = saborDaMassa
        this.saborRecheio = saborRecheio
    }
    escrever(){
        console.log(`Um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborRecheio}`)
    }
    assar(){
        console.log(`Bolo assando de ${this.saborDaMassa} `)
    }
}
let boloFesta = new formaDeBolo("massa de chocolate", "nutella")
let boloPremium = new formaDeBolo("baunilha","morango com ninho")
boloFesta.escrever()
boloPremium.escrever()
boloPremium.assar()