const config = require('../config.js');
const packageName = config.packageName

function math(op){
    if(!op || typeof (op) !== 'number') throw new Error(`[${packageName} Error] No se dió la operación matematica básica!`)
    const operators = ['+','-','*','/','(',')','0','1','2','3','4','5','6','7','8','9']
    if(!operators.some(filter => op.toString().includes(filter))) throw new Error(`[${packageName} Error] Se han utilizado operadores invalidos`)
    return Number(op)
}

module.exports = math