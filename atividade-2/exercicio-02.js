function converterMoeda(valorUSD, cotacao) {

    if (!valorUSD || !cotacao) {
        return;
    }

    let valorBRL = valorUSD * cotacao;

    return {
        valorUSD: valorUSD,
        cotacao: cotacao,
        valorBRL: valorBRL
    };
}

module.exports = converterMoeda;