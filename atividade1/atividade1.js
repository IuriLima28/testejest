function calcularJurosCompostos() {

    let valorInicial = document.getElementById("valorInicial").value
    let meses = document.getElementById("meses").value
    let juros = 0.015 * meses
    let valorFinal = valorInicial * juros
    
    alert("O valor inicial da aplicação é: " +valorInicial+ " reais")
    alert("O tempo da aplicação é: " +meses+ " meses")
    alert("O valor final obtido é: " +valorFinal+ " reais")

}
module.exports = calcularJurosCompostos;