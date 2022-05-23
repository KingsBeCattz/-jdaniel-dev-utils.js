const config = require('../config.js');
const packageName = config.packageName

async function error(message, data, type='reply'){
    try {
        const types = [ 'reply', 'send']
        if(!message || typeof message !== 'object') throw new Error(`[${packageName} Error] No se dió el Message (https://discord.js.org/#/docs/discord.js/stable/class/Message)`)
        if(!types.some(t => type.toLowerCase().includes(t))) throw new Error(`[${packageName} Error] No haz dado un tipo valido, este debe ser reply o send`)
        if(type.toLowerCase() === 'reply'){
            const res = await message.reply(data)
            return res
        } else {
            const res = await message.channel.send(data)
            return res
        }
    } catch (e) {
        console.log(e)
        return undefined
    }
}

module.exports = error