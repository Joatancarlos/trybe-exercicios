function substituaX (nome) {
    const frase = 'Tryber x aqui!'
    return frase.replace("x", nome)
}

function minhasSkills (retornoDaFuncao) {
    const skills = ['HTML', 'CSS', 'JS']
    let resultado = `
        ${retornoDaFuncao}
        Minhas três principais habilidades são:
            - ${skills[0]}
            - ${skills[1]}
            - ${skills[2]}
    `
    return resultado
}

console.log(minhasSkills(substituaX('Joatan')));