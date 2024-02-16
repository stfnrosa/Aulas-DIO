//em caso de extrema necessidade usar a palavra undefined, porem não é considerado um boa pratica
torrar("pão integral",undefined, 10.90)
function torrar(pao, nome = "Cliente ", valor){
    console.log("torrada feita com " + pao)
    console.log("é um pedidio de " + nome)
    console.log("O Valor total é " + valor)
} 
//torrada feita com pão integral
//é um pedidio de Cliente 
//O Valor total é 10.9
