const config = require('../config.js');
const packageName = config.packageName

module.exports = (min, max) => {
    if(typeof min !== 'number') throw new Error(`[${packageName} Error] No se dió el Minimo`)
    if(typeof max !== 'number') throw new Error(`[${packageName} Error] No se dió el Maximo`)
    return Math.floor(Math.random() * (max - min)) + min;
}