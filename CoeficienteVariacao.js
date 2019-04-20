/*

    Coeficiente de Vaiação

    O desviopadrão, por sua vez, é uma medida de dispersão que analisa o grau de variação
    de uma série de dados em torno da média, sendo calculado a partir da raiz quadrada da variância.
    A variância é a média aritmética dos quadrados dos desvios.

    se 2  CV's apresentam um maior coeficiente de variação, os dados provenientes
    dele são mais dispersos em torno da média.

    CV = 1, a dispersão equivale a 100% da média, indicando uma alta variabilidade.

    Podemos, com auxílio do coeficiente de variação, analisar se uma distribuição
    de dados é mais ou menos homogênea em relação à sua média

*/

const Dispersao = require('./Dispersao');
const MathHelper = require('./MathHelper');

class CoeficienteVariacao{
    constructor(){
        
    }
    static calcCoeficienteVariacao(dados, bessel){
        console.log("Calculando o coeficiente de variação: ");
        const desviaoPadrao = Dispersao.calcDesvioPadrao(dados, bessel);
        const media = MathHelper.calcMedia(dados);
        console.log(`Desvio Padrão: ${desviaoPadrao}`);
        console.log(`Média: ${media}`);
        const result = desviaoPadrao / media;
        return result;
    }
}

module.exports = CoeficienteVariacao;