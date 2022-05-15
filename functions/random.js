const packageName = require('../config.js').packageName

function random(min, max){
    if(typeof min !== 'number') throw new Error(`[${packageName} Error] No se dió el Minimo`)
	if(typeof max !== 'number') throw new Error(`[${packageName} Error] No se dió el Maximo`)
	const res = Math.floor(Math.random() * (max - min)) + min
	return res
}

module.exports = random(min,max)