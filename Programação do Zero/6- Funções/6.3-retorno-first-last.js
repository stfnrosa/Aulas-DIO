let userName = getFirstName("Carlos Almeida Silva")
let userLastName = getLastName("Carlos Almeida Silva")
console.log("Seja Bem Vindo " + userName + " " + userLastName)

function getFirstName(name) {
    let firstName = name.split(" ")[0]
    return firstName
}

function getLastName(name) {
    let nameArray = name.split(" ")
    let lastName = nameArray[nameArray.length - 1]
    return lastName
}
