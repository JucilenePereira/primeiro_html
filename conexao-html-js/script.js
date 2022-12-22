const formTitle = document.getElementById('texto')
const navElements = document.getElementsByClassName('elementos_nav')
const postautor = document.getElementsByClassName('post-autor')


//postautor[1].childNodes[2] = 'hakuna matata'

//console.log(navElements)
//console.log(formTitle.hasChildNodes)


//formTitle.innerText = 'Olá pessoas Bonitas'

function imprimir(listaElementos) {
    for (let i= 0; i < listaElementos.length; i++) {
        console.log(listaElementos[i].childNodes[1].innerText)

    }
}

//1.41:23



imprimir(navElements)