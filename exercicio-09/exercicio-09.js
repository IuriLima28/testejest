function converterTemperatura(valor, tipo) {
    let celsius, fahrenheit;

    if (tipo === "CtoF") {
        celsius = valor;
        fahrenheit = (valor * 9 / 5) + 32;
    } else if (tipo === "FtoC") {
        fahrenheit = valor;
        celsius = (valor - 32) * 5 / 9;
    }

    return {
        celsius: celsius,
        fahrenheit: fahrenheit
    };
}

// COPIE ESTA LINHA EXATAMENTE ASSIM:
// module.exports = converterTemperatura;