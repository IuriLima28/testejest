if (typeof window !== "undefined") {
  window.calcularVendaComFrete = calcularVendaComFrete;
}

// exercicio-04.js
function calcularVendaComFrete(valorProdutos) {
  let frete = 20;
  if (valorProdutos > 200) {
      frete = 0;
  }

  const valorTotal = valorProdutos + frete;

  return {
      valorProdutos,
      frete,
      valorTotal
  };
}

// Exporta a função corretamente
module.exports = calcularVendaComFrete;