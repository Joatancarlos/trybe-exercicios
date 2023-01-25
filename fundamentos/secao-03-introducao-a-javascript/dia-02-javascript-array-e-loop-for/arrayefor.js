let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1 - Percorra o array imprimindo todos os valores nele contidos com a função console.log();

for (let i = 0; i < numbers.length; i += 1) {
    console.log(numbers[i])
}


// 2 - Some todos os valores contidos no array e imprima o resultado;

let sum = 0

for (let i = 0; i < numbers.length; i += 1) {
    sum = sum + numbers[i]
}

console.log(`A soma é ${sum}`)

// 3 - Calcule e imprima a média aritmética dos valores contidos no array

let qtdItens = numbers.length
let media = sum / qtdItens

console.log(`A média é de ${media}`);