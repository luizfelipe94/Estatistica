class MathHelper {
    constructor(dados){
        this.dados = this.ordernar(dados);
    }
    ordernar(){

    }
    static calcMedia (dados) {
        const total = dados.reduce((a, b) => a + b);
        return total / dados.length;   
    }

    static calcModa(dados){
        const dadosMap = {};
        for (let i = 0; i < dados.length; i++) {
            if(dadosMap[dados[i]] === undefined){
                dadosMap[dados[i]] = 0;
            }            
            dadosMap[dados[i]] += 1;
        }
        let maiorFrequencia = 0;
        let moda;
        for(let prop in dadosMap){
            if(dadosMap[prop] > maiorFrequencia){
                maiorFrequencia = dadosMap[prop];
                moda = prop;
            }
        }
        return moda;
    }
    static calcMediana(dados){
        // const rol = dados.sort((a, b) => a - b);
        // if(rol.length % 2 == 0){
        //     const aux1 = (rol.length / 2) - 1;
        //     const aux2 = (rol.length / 2) + 1;
        //     const total = rol[aux1 + 1] + rol[aux2 + 1];
        //     const result = total / 2;
        //     return result;
        // }else{
        //     const pos = ((rol.length / 2) + 0.5) - 1;
        //     const result = rol[pos];
        //     return result;
        // }
        // TODO: Fazer calculo de mediana.
    }
}

module.exports = MathHelper;