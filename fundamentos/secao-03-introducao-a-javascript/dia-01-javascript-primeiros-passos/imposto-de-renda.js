//Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR.

let salarioBruto = 3000
let aliquotaINSS = 0
let impostoDeRenda = 0

// INSS

if (salarioBruto < 1556.95) {
    aliquotaINSS = salarioBruto * 0.08
} else if (salarioBruto < 2594.93) {
    aliquotaINSS = salarioBruto * 0.09
} else if (salarioBruto < 5189.82) {
    aliquotaINSS = salarioBruto * 0.11
} else {
    aliquotaINSS = 570.88
}

let salarioBase = salarioBruto - aliquotaINSS
let salarioLiquido
let parcela
let aliquotaIR

if (salarioBase < 1903.99) {
    impostoDeRenda = impostoDeRenda
} else if (salarioBase < 2826.66) {
    aliquotaIR = salarioBase * 0.075
    parcela = 142.80
} else if (salarioBase < 3751.06) {
    aliquotaIR = salarioBase * 0.15
    parcela = 354.8
} else if (salarioBase < 4664.68) {
    aliquotaIR = salarioBase * 0.225
    parcela = 636.13
} else {
    aliquotaIR = salarioBase * 0.275
    parcela = 869.36
}

salarioLiquido = salarioBase - (aliquotaIR - parcela)
console.log(`O salário do trabalhador brasileiro tirando o roubo do governo é R$ ${salarioLiquido}. \nSendo de INSS R$ ${aliquotaINSS} e de IMPOSTO de Renda R$ ${aliquotaIR}`);