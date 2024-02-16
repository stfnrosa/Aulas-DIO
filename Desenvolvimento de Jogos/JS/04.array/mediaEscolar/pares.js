let num1 = 100;
let num2 = 200;
let pares = [];




for (let i = num1; i < num2; i++) {
    if(i % 2 === 0){
        pares.push(i);
    }
}
console.log(pares);