let numero = document.querySelector("h1");

let botao = document.querySelector("button");

let contagem = 0;

 

function adicionarUm(){

  contagem = contagem + 1;

  numero.innerText = contagem;

}
 

botao.addEventListener("click", adicionarUm);


