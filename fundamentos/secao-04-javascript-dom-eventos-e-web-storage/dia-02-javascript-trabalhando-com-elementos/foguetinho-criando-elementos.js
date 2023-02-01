let ondeVcEsta = document.querySelector('#elementoOndeVoceEsta')
let pai = document.querySelector('#pai')

const execute = () => {
    let irmaoOndeVcEsta = document.createElement('section')
    pai.appendChild(irmaoOndeVcEsta)
    ondeVcEsta.appendChild(document.createElement('p'))
}

execute()