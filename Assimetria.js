const mathHelper = require('./MathHelper');
const dispersao = require('./Dispersao');

class Assimetria {
    constructor(){}

    static calcCoeficienteAssimetria(dados){
        const media = mathHelper.calcMedia(dados);
        const moda = mathHelper.calcModa(dados);
        const desvioPadrao = dispersao.calcDesvioPadrao(dados);
        const ap = (media - moda) / desvioPadrao;
        console.log(ap);
    }
}

module.exports = Assimetria;

/**
 * A distribuição simétrica possui as seguintes características:
 * 
 * - a média, mediana e moda se equivalem;
 * - o coefi ciente de assimetria é nulo;
 * - metade do gráfi co é a imagem-espelho da outra.
 * 
 * A distribuição assimétrica positiva possui as seguintes características:
 * 
 * - a moda é menor que a mediana, que é menor que a média;
 * - o coefi ciente de assimetria é maior do que zero;
 * - o gráfi co não cria imagem-espelho entre as metades.
 * 
 */