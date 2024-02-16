torrar("pão de milho", 10.90)
//como boa prática a variavel opcional deve ser o ultimo parametro
function torrar(pao, valor, nome = "Cliente "){ 
    console.log("torrada feita com " + pao)
    console.log("O Valor total é " + valor)
    console.log("é um pedidio de " + nome)
}  
//torrada feita com pão de milho
//O Valor total é 10.9
//é um pedidio de Client