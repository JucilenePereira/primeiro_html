let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");
const addProduto = document.getElementById("btn-adicionar-produto-01")
const quantidadeProduto = document.getElementById("quantidade-produto-01")
const subProduto = document.getElementById("btn-subtrair-produto-01")
const title = document.getElementsByTagName('h2')

let subtotalInfo = {
  valor: 11.66,
};

addProduto.addEventListener('click', adicionarProduto)
subProduto.addEventListener('click', subtrairProduto)

function adicionarProduto() {
  if (quantidadeProduto.value < 10) {
  quantidadeProduto.value = Number(quantidadeProduto.value) + 1
  }
  subTotal()
}

function subtrairProduto() {
  if (quantidadeProduto.value > 1)
  quantidadeProduto.value = Number(quantidadeProduto.value) - 1
  console.log(quantidadeProduto.value)
  subTotal()
}

function subTotal() {
  // quantidadeSubtotal.innerText = quantidadeProduto.value + " itens";
  quantidadeSubtotal.innerText = quantidadeProduto.value == 1? `${quantidadeProduto.value} item`: `${quantidadeProduto.value} itens`;
  calculoValorTotal(quantidadeProduto.value)
} 

function calculoValorTotal(quantidadeProduto) {
  valorSubtotal.innerText = (subtotalInfo.valor * quantidadeProduto).toFixed(2);
}


