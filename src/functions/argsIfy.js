const config = require('../config.js');
const packageName = config.packageName

function argsIfy(message){
    if(!message || typeof message !== 'object') throw new Error(`[${packageName} Error] No se dió el Message (Puede ser un string o un Message (https://discord.js.org/#/docs/discord.js/stable/class/Message))`)
    if(!message.content && typeof message === 'string'){
        if(!message.content) return null
        let args = message.slice().trim().split(/ +/)
        return args
    } else {
        if(!message.content) return null
        let args = message.content?.slice().trim().split(/ +/)
        return args
    }
}

module.exports = argsIfy