const calcularVelocidadeMedia = require("./exercicio-10.js");

describe("Cálculo de velocidade média", () => {
  test("deve calcular corretamente a velocidade média com tempo em horas", () => {
    const resultado = calcularVelocidadeMedia(120, 2);

    expect(resultado.distanciaKm).toBe(120);
    expect(resultado.tempoHoras).toBe(2);
    expect(resultado.velocidadeMedia).toBe(60);
  }); // Fecha o test
}); // Fecha o describe (O ERRO ESTAVA AQUI, FALTAVA ESSA LINHA)