const arrayPostagens = [
  {
    titulo: "Pop Vegan",
    subtitulo: "Comida vegana para todos!",
    data: "06/07/2022",
    texto: "Restaurante em Consolação com comida por kilo no almoço e rodízio de pizzas à noite, tudo 100% vegano. Vale muito a pena conhecer :)"
  },
  {
    titulo: "Make Hommus. Not War",
    subtitulo: "Só delivery, para curtir em casa!",
    data: "18/08/2022",
    texto: "Neste restaurante não só pode, como é encorajado comer o antepasto como prato principal. Recomendamos os kibes e a kafta bonina."
  },
  {
    titulo: "Churrascada do Mar",
    subtitulo: "Melhor do que estar na praia!",
    data: "30/08/2022",
    texto: "Todos conhecemos e amamos um bom churrasco, mas o que você acha de experimentar um churrasco focado em frutos do mar? Nós gostamos, experimente e nos conte o que você achou!"
  },
]

for (let i= 0; i < arrayPostagens.length; i++) {
  const article = document.createElement('article')
  
  article.innerHTML = `
  <h3>${arrayPostagens[i].titulo}</h3>
  <p class="subtitulo">${arrayPostagens[i].subtitulo}</p>
  <div class="data">${arrayPostagens[i].data}</div>
  <p>${arrayPostagens[i].texto}</p>
`
const main = document.querySelector('main')
main.appendChild(article)
}


//console.log(arrayPostagens[0].titulo)

// criar um elemento

//const newArticle = document.createElement('article')
//newArticle.id = 'post-2'

//const lastArticle = document.createElement('article')
//lastArticle.id = 'post-3'

// popular o elemento

//newArticle.innerHTML = `
  //<h3>${arrayPostagens[1].titulo}</h3>
  //<p class="subtitulo">${arrayPostagens[1].subtitulo}</p>
  //<div class="data">${arrayPostagens[1].data}</div>
  //<p>${arrayPostagens[1].texto}</p>
    
//`

//lastArticle.innerHTML = `
  //<h3>${arrayPostagens[2].titulo}</h3>
  //<p class="subtitulo">${arrayPostagens[2].subtitulo}</p>
  //<div class="data">${arrayPostagens[2].data}</div>
  //<p>${arrayPostagens[2].texto}</p>
    
//`

// colocar na Dom
//const main = document.querySelector('main')
//main.appendChild(newArticle)

//const main2 = document.querySelector('main')
//main2.appendChild(lastArticle)



