class MathHelper {
    constructor(){}
    static calcMedia (dados) {
        const total = dados.reduce((a, b) => a + b);
        return total / dados.length;   
    }
}

module.exports = MathHelper;