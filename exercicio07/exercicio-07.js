// exercicio-07.js
function calcularConsumo(distanciaKm, combustivelLitros, combustivelParaEstimar) {
    const consumoMedio = distanciaKm / combustivelLitros;
    const resultado = {
        distanciaKm,
        combustivelLitros,
        consumoMedio
    };

    if (combustivelParaEstimar !== undefined) {
        resultado.autonomiaEstimada = consumoMedio * combustivelParaEstimar;
    }

    return resultado;
}

module.exports = calcularConsumo;