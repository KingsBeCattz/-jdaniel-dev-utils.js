const packageName = require('../config.js').packageName

function randomSring(length){
    if(typeof size !== 'number') throw new Error(`[${packageName} Error] No se dió un numero`)
	const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz'
	let result = '';
	const charactersLength = characters.length;
	for ( let i = 0; i < length; i++ ) {
	result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result
}

module.exports = randomSring(length)