let keyText = document.querySelector("#key-text");
let codeText = document.querySelector("#code-text");
let quadrado = document.querySelector("#quadrado");
let distanciaDaEsquerda = 0

// document.addEventListener("keyup", (e)=> {

//     console.log(e);
  
//   })

document.addEventListener("keyup",
  (e)=> {
    console.log(e.key);
    console.log(e.code);
  })


  document.addEventListener("keyup", 
  (e)=> {
    keyText.innerText = e.key;
    codeText.innerText = e.code;
  })

  document.addEventListener("keyup", 
  (e)=> {
    keyText.innerText = e.key;
    codeText.innerText = e.code;
  })

  document.addEventListener("keydown", (e) => {

 

  })

  	
document.addEventListener("keydown", (e) => {
    if(e.code == "ArrowRight"){
      console.log("Apertou a seta à direita");
    }
  })

  document.addEventListener("keydown", (e) => {
    if(e.code == "ArrowRight"){
      distanciaDaEsquerda = distanciaDaEsquerda + 10
      console.log(distanciaDaEsquerda);
    }
  })

  document.addEventListener("keydown", (e) => {
    if(e.code == "ArrowRight"){
      distanciaDaEsquerda = distanciaDaEsquerda + 10
      console.log(distanciaDaEsquerda);
  
      quadrado.style.left = distanciaDaEsquerda + "px"
    }
  })