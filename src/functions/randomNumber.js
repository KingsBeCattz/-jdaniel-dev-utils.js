const config = require('../config.js');
const packageName = config.packageName

function randomNumber(length){
    if(typeof length !== 'number') throw new Error(`[${packageName} Error] No se dió un numero`)
    const min = 0
    const max = "9".repeat(length)
    const res = Math.floor(Math.random() * (max - min)) + min;
    return Number(res)
}

module.exports = randomNumber