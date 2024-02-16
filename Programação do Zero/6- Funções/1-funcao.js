torrar() 
// como boa prática, crie uma função separada para cada ação
// função main pode chamar todas as funções, cada qual com ações separadas
function torrar (){
  console.log("Torrando pão") 
  injetarPao() 
}
function injetarPao(){
    console.log("Preparando para injetar pão")
    console.log("Finalizado")
}
