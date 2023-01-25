// Luiz Arlochi, Clinton Brito e Joatan 

// 1 - Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
// A soma total de 1 a 50 é:

let soma = 0

for (let index = 1; index <= 50; index += 1) {
    soma = soma + index
}

console.log(soma);


//2 -
// Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.

// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

let divisiveis = 0 

for (let index = 2; index <= 150; index += 1) {
    if (index % 3 === 0) {
        divisiveis += 1  
    } 
    
    if (divisiveis === 50) {
        console.log("mensagem secreta");
    }
}

// 3 -
//Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won".

let player1 = "papel"
let player2 = 'pedra'

if (player1 === player2) {
    console.log("A Tie");
} else if (player1 === "pedra" && player2 === "tesoura" || player1 === "papel" && player2 === "pedra" || player1 === "tesoura" && player2 === "papel") {
    console.log("Player 1 won");
} else {
    console.log("Player 2 won");
}



//4
//Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
//Bônus: Crie a condição utilizando operador ternário.

let idade = 16

let confirmaIdade = idade >= 18 ? console.log("essoa é maior de idade") : console.log("essoa é menor de idade")