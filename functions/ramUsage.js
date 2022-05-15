const packageName = require('../config.js').packageName

function ramUsage(decimals=2,type='MB'){
    if(type !== 'MB' || type !== 'GB') throw new Error(`[${packageName} Error] No se dió un Typo valido, solo se es valido MB y GB`)
	if(typeof decimals !== 'number') throw new Error(`[${packageName} Error] No se dió un numero para las Decimales`)
	if(type === 'MB'){
		let result = (process.memoryUsage().rss / 1024 / 1024).toFixed(decimals)
		return result+type
	} else {
		let result = (process.memoryUsage().rss / 1024 / 1024 / 1024).toFixed(decimals)
		return result+type
	}
}

module.exports = ramUsage(decimals=2,type='MB')