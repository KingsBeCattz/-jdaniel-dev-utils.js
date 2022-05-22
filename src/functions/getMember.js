const config = require('../config.js');
const packageName = config.packageName

async function getMember(message, id, returnAuthor=false){
    if(!message) throw new Error(`[${packageName} Error] No se dió un Mensaje a analizar`)
    let user = id?.replace(/[^0-9]/g, '')?.replace(/ /g, '')
    if (!user && !returnAuthor) return null;
    if(!user && returnAuthor) return message.member
    let m;
    m = message.guild.members.cache.get(user)
    if(!m) m = await message.guild.members.fetch(user).catch(e=>null)
    if(!m && returnAuthor) return message.member
    return m
}

module.exports = getMember