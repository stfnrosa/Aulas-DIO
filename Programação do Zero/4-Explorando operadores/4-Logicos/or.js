// OR (||) - somente posera sair da casa se não estiver chovendo OU estiver com um guarad chuva
let tempo = "chuva"
let item = "guarda-chuva"
let podeSair = (tempo != "chuva")||(item === "guarda-chuva")
console.log("Poderá sair de casa? " + podeSair)