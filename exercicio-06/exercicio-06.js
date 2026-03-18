function calcularTempoProducao(quantidadePecas, maquinas) {
    const producaoPorHoraPorMaquina = 15; 
    const producaoPorHoraTotal = producaoPorHoraPorMaquina * maquinas;
    const horasNecessarias = quantidadePecas / producaoPorHoraTotal;

    return {
        quantidadePecas: quantidadePecas,
        maquinas: maquinas,
        producaoPorHoraTotal: producaoPorHoraTotal,
        horasNecessarias: horasNecessarias
    };
}

// Essa verificação evita erro no navegador, mas mantém o funcionamento no Jest
if (typeof module !== 'undefined') {
    module.exports = calcularTempoProducao;
}