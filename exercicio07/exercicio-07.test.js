const calcularConsumo = require("./exercicio-07");

describe("Cálculo de consumo médio de combustível", () => {
  test("Deve calcular corretamente o consumo médio", () => {
    const resultado = calcularConsumo(300, 25);
    expect(resultado.distanciaKm).toBe(300);
    expect(resultado.combustivelLitros).toBe(25);
    expect(resultado.consumoMedio).toBe(12);
  });
});