function calcularVelocidadeMedia(distanciaKm, tempoHoras) {
    const velocidadeMedia = distanciaKm / tempoHoras;
    return {
        distanciaKm,
        tempoHoras,
        velocidadeMedia
    };
}

// Essa trava permite que o JEST funcione sem quebrar o NAVEGADOR
if (typeof module !== 'undefined') {
    module.exports = calcularVelocidadeMedia;
}