function calcularJurosCompostos(valorInicial, meses) {

    const taxa = 0.015

    let valorFinal = valorInicial * Math.pow((1 + taxa), meses)
    valorFinal = Number(valorFinal.toFixed(2))

    let juros = Number((valorFinal - valorInicial).toFixed(2))

    return {
        valorInicial: valorInicial,
        meses: meses,
        valorFinal: valorFinal,
        juros: juros
    }
}

module.exports = calcularJurosCompostos;