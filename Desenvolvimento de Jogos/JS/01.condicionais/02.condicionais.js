/*Calcular se um número é par ou impar e escrever no console*/
const numero = 5
const isNumeroPar = (numero % 2) === 0
if(isNumeroPar){
    console.log("É um número par")
} else if(!isNumeroPar){
    console.log("É número ímpar")
}else {
    console.log("Valor Inválido")
}