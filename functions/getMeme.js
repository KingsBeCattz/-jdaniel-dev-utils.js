const packageName = require('../config.js').packageName

function getMeme(type){
    const spanishmeme = require('spanish.memes')
	const img = require('../memes.js')
	const vid = spanishmeme.VideoMeme()
	const soi = await require('shot-on-iphone')()
	if(!type) throw new Error(`[${packageName} Error] No se dió un tipo valido\nTipos: Image, Video, SoI`)
	if(type.toLowerCase() !== 'image' || type.toLowerCase() !== 'video' || type.toLowerCase() !== 'soi') throw new Error(`[${packageName} Error]  Ese no es tipo valido!`)
	if(type.toLowerCase() === 'image'){
		return img
	}
	if(type.toLowerCase() === 'video'){
		return vid
	}
	if(type.toLowerCase() === 'soi'){
		return soi
	}
}

module.exports = getMeme(type)