let userName = getFirstName("Estefani Marques Rosa", " ")
console.log("Seja Bem Vindo " + userName)
userName = getFirstName("Carlos-Almeida-Silva", "-")
console.log("Seja Bem Vindo " + userName )

function getFirstName(name,splitChar){
    let firstName = name.split(splitChar)[0]
    //função ja existente no JS quebra o texto quando encontra o parametro e guarda em vetores
    return firstName
}
