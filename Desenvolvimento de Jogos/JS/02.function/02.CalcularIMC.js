function calcularIMC(peso,altura){
    return peso/Math.pow(altura,2)
}
function classeIMC(imc){
    let classe = "" 
    if (imc<18.5){
        classe = "Abaixo do peso"
    }else if(imc>=18.5 && imc<25){
        classe = "Peso normal"
    }else if(imc>=25 && imc<30){
        classe = "Acima do peso"
    }else if(imc>=30 && imc < 40){
        classe = "Obeso"
    }else{
        classe = "Obesidade grave"
    }
    return classe
}
function main(){
    const peso = 75
    const altura = 1.75
    const imc = calcularIMC(peso,altura)
    console.log(imc)
    const classe = classeIMC(imc)
    console.log(classe)
}
main()