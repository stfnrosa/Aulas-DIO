// ---> switch case - escolha caso
let fruta = "banana" // podendo ser usado variaveis do tipo number

switch(fruta){
    case "laranja":
        console.log("suco de laranja")
    break
    case "banana":
    case "mamão":// mais de um case executando a mesma ação com mesmo resultado
        console.log("vitamina de " + fruta)
    break 
    case "maça":
        console.log("suco de maçã")
    break

    default: //caso nenhum dos casos seja atendidio
    console.log("suco genérico")

}