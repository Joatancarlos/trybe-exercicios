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

// 4 - Valor final menor que 20

if (numbers[numbers.length - 1] > 20 ) {
    console.log('Valor maior que 20');
} else {
    console.log('Valor menor que 20');
}


// 5 - Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let maiorValor = 0

for (let i = 0; i < numbers.length; i += 1) {
    if (maiorValor < numbers[i]) {
        maiorValor = numbers[i]
    }
}

console.log(`O maior valor é ${maiorValor}`);

// 6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;

let impares = []

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 != 0) {
        impares.push(numbers[i])
    }
}

let qtdImpares = impares.length

if(qtdImpares == 0 ) {
    console.log("Não tem nenhum número ímpar.");
}

console.log(`A quantidade de ímpares é : ${qtdImpares}`);