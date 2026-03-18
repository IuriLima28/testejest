function calcularAreaTerreno() {
    let largura = Number(document.getElementById("largura").value)
    let comprimento = Number(document.getElementById("comprimento").value)
    let area = largura * comprimento

    alert("A area do terreno em metros quadrdos é: " +area)
}