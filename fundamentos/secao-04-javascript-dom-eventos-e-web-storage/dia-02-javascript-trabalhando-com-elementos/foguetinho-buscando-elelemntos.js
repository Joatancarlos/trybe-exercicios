let ondeVcEsta = document.querySelector('#elementoOndeVoceEsta')
let pai = document.querySelector('#pai')

const execute = () => {
    ondeVcEsta.parentElement.style.color = 'green'
    ondeVcEsta.firstElementChild.innerHTML = '<p>Aqui está o primeiro filho do primero filho</p>'
    console.log(pai.firstElementChild);
    console.log(ondeVcEsta.previousElementSibling);
    console.log(ondeVcEsta.nextSibling);
    console.log(ondeVcEsta.nextElementSibling);
    console.log(pai.children[2]);
}

execute()