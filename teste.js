const Dispersao = require('./Dispersao');
const CoeficienteVariacao = require('./CoeficienteVariacao');
const Assimetria = require('./Assimetria');
const MathHelper = require('./MathHelper');

(async ()=> {
    console.log("Teste dos cálculos...");

    const dados = [1,1,2,3,4,4,4];
    Assimetria.calcCoeficienteAssimetria(dados);
    
    

})();