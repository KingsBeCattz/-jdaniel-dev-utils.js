const config = require('../config.js');
const packageName = config.packageName

function meme(type='image'){
    const types = ['image','video']
    if(!type || typeof type !== 'string') return undefined
    if(!types.some(t => type.toLowerCase().includes(t))) return undefined
    if(type.toLowerCase() === 'image'){
        return require('shinobu-memes').Shinobumemes()
    } else {
        return require('shinobu-memes').video()
    }
}

module.exports = meme