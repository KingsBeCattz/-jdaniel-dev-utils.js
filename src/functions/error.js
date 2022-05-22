const config = require('../config.js');
const packageName = config.packageName

async function error(message, error, type='reply'){
    const types = [ 'reply', 'send']
    if(!message || typeof message !== 'object') throw new Error(`[${packageName} Error] No se dió el Message (https://discord.js.org/#/docs/discord.js/stable/class/Message)`)
    if(!error || typeof error !== 'string') throw new Error(`[${packageName} Error] No se dió el mensaje de error!\nPD: Para el salto de línea, usa \n`)
    if(!types.some(t => type.toLowerCase().includes(t))) throw new Error(`[${packageName} Error] No haz dado un tipo valido, este debe ser reply o send`)
    if(type.toLowerCase() === 'reply'){
        const res = await message.reply(error)
        return res
    } else {
        const res = await message.channel.send(error)
        return res
    }
}

module.exports = error