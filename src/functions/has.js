const config = require('../config.js');
const packageName = config.packageName

function has(array, message){
    if(!array || typeof array !== 'object') throw new Error(`[${packageName} Error] No se dió la lista de textos para ver si se tiene o no, este debe ser en array (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#examples)`)
    if(!message || typeof message !== 'string') throw new Error(`[${packageName} Error] No se dió el texto a analizar`)
    return array.some(f => message.includes(f))
}

module.exports = has