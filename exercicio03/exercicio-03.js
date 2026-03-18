
function calcularImposto() {
  let precoOriginal = Number(document.getElementById("preco").value)
  let percentualImposto = 0.12
  let valorImposto = precoOriginal * percentualImposto
  let precoFinal = precoOriginal + valorImposto


  alert(precoFinal)
};




