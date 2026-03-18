function calcularVendaComFrete() {
  valorProdutos = Number(document.getElementById("preco").value)
  let frete = 20;

  if (valorProdutos > 200) {
    frete = 0;
  }

  const valorTotal = valorProdutos + frete;

  alert("Valor produto: " + valorProdutos)
  alert("Frete: 20")
  alert("Valor total:" + valorTotal)
};
