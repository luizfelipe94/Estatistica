const Dispersao = require('./Dispersao');
const CoeficienteVariacao = require('./CoeficienteVariacao');
const MathHelper = require('./MathHelper');

(async ()=> {
    console.log("Teste dos cálculos...");

    const dados = [1, 2, 3, 4, 5, 1, 3, 4, 5, 10];
    
    
    const moda = MathHelper.calcMediana(dados);
    console.log(moda);

})();