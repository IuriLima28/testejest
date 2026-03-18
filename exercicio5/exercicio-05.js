function dividirLucro(lucroTotal){
    let quantidadeSocios = 3;

    let valorPorSocio = lucroTotal/quantidadeSocios;


    return{
            lucroTotal: lucroTotal,
            quantidadeSocios: quantidadeSocios,
            valorPorSocio: valorPorSocio
        };
}

// module.exports = dividirLucro;