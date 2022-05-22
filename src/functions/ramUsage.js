const config = require('../config.js');
const packageName = config.packageName

function ramUsage(decimals=2,format='MB'){
    if(format.toUpperCase() !== 'MB' || format.toUpperCase() !== 'GB' || typeof format !== 'string') throw new Error(`[${packageName} Error] No se dió un Typo valido, solo se es valido MB y GB`)
    if(typeof decimals !== 'number') throw new Error(`[${packageName} Error] No se dió un numero para las Decimales`)
    if(format.toUpperCase() === 'MB'){
        let result = (process.memoryUsage().rss / 1024 / 1024).toFixed(decimals)
        return result+format
    } else {
        let result = (process.memoryUsage().rss / 1024 / 1024 / 1024).toFixed(decimals)
        return result+format
    }
}

module.exports = ramUsage