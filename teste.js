const Dispersao = require('./Dispersao');
const CoeficienteVariacao = require('./CoeficienteVariacao');

(async ()=> {
    console.log("Teste dos cálculos...");

    const dados = [45, 52, 54, 61];
    
    const CV = CoeficienteVariacao.calcCoeficienteVariacao(dados);
    console.log(`Coeficiente de Variação: ${CV}`);

    console.log("Fim!");
})();