const MathHelper = require('./MathHelper');

class Dispersao extends MathHelper{
    
    constructor(){}

    static calcAmplitudeTotal(dados, dadosAgrupados = false){
        if(!dadosAgrupados){
            const maior = dados.reduce((a, b) => Math.max(a, b));
            const menor = dados.reduce((a, b) => Math.min(a, b));
            return maior - menor;
        }
        else{
            let result = [];
            for (let i = 0; i < dados.length; i++) {
                result.push(dados[i].cSuperior - dados[i].cInferior);                
            }
            return result;
        }
    }
    
    static calcDesvioMedio(dados){
        const media = this.calcMedia(dados);
        const aux = [];
        for (let i = 0; i < dados.length; i++) {
            aux.push(Math.abs(dados[i] - media));            
        }
        const totalAux = aux.reduce((a, b) => a + b);
        return totalAux / dados.length;
    }

    static calcVariancia(dados, bessel){
        // bessel é um fator de correção para auxíliar no calculo de variância.
        const media = this.calcMedia(dados);
        const aux = [];
        for (let i = 0; i < dados.length; i++) {
            aux.push((dados[i] - media) ** 2);
        }
        const totalAux = aux.reduce((a, b) => a + b);
        const divisor = !bessel ? dados.length : dados.length - 1; 
        const result = totalAux / divisor;
        return result.toFixed(2);
    }

    static calcDesvioPadrao(dados, bessel = false){
        const variancia = this.calcVariancia(dados, bessel);
        const result = Math.sqrt(variancia);
        return result.toFixed(2);
    }
}

module.exports = Dispersao;