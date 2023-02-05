window.onload = (() => {
    const btnsCorFundo = document.querySelectorAll('.cor-de-fundo button')
    const btnsCorFonte = document.querySelectorAll('.cor-da-fonte button')
    const btnsTamanhoFonte = document.querySelectorAll('.tamanho-da-fonte button')
    const btnsEspacoLinha = document.querySelectorAll('.espacamento-linhas button')
    const btnsTipoFonte = document.querySelectorAll('.tipo-de-fonte button')
    const btnReset = document.querySelector('#btn-reset')
    const main = document.querySelector('.main')

    let bgColor
    let color
    let fontSize
    let letterSpacing
    let fontFamily

    if(localStorage.length !== null) {
        
        bgColor = localStorage.bgColor
        color = localStorage.color
        fontSize = localStorage.fontSize
        letterSpacing = localStorage.letterSpacing
        fontFamily = localStorage.fontFamily

        main.style.backgroundColor = bgColor
        main.style.color = color
        main.style.fontSize = fontSize
        main.style.letterSpacing = letterSpacing
        main.style.fontFamily = fontFamily
    }
    
    for (let i = 0; i < btnsCorFundo.length; i += 1) {
        btnsCorFundo[i].addEventListener('click', () => {
            bgColor = btnsCorFundo[i].innerText
            main.style.backgroundColor = bgColor
            localStorage.setItem('bgColor', bgColor) 
        })
    }


    for (let i = 0; i < btnsCorFonte.length; i += 1) {
        btnsCorFonte[i].addEventListener('click', () => {
            color = btnsCorFonte[i].innerText
            main.style.color = color
            localStorage.setItem('color', color)
        })
    }

    for (let i = 0; i < btnsTamanhoFonte.length; i += 1) {
        btnsTamanhoFonte[i].addEventListener('click', () => {
            fontSize = btnsTamanhoFonte[i].innerText
            main.style.fontSize = fontSize
            localStorage.setItem('fontSize', fontSize)
        })
    }

    for (let i = 0; i < btnsEspacoLinha.length; i += 1) {
        btnsEspacoLinha[i].addEventListener('click', () => {
            letterSpacing = btnsEspacoLinha[i].innerText

            if(letterSpacing === 'normal') {
                letterSpacing = 'initial'
                main.style.letterSpacing = letterSpacing
                localStorage.setItem('letterSpacing', letterSpacing)
            } else {
                main.style.letterSpacing = letterSpacing + 'rem'
                localStorage.setItem('letterSpacing', letterSpacing + 'rem')
            }

        })
    }

    for (let i = 0; i < btnsTipoFonte.length; i += 1) {
        btnsTipoFonte[i].addEventListener('click', () => {
            fontFamily = btnsTipoFonte[i].innerText
            main.style.fontFamily = fontFamily
            localStorage.setItem('fontFamily', fontFamily)
        })
    }

    btnReset.addEventListener('click', () => {
        localStorage.clear()
        location.reload()
    })
})