const config = require('../config.js');
const packageName = config.packageName

async function isBanned(user, guild){
    if(!user || typeof user !== 'object') throw new Error(`[${packageName} Error] No se dió un usuario valido`)
    if(!guild || typeof guild !== 'object') throw new Error(`[${packageName} Error] No se dió un servidor valido`)
    return guild.bans.fetch(user.id)?false:true
}

module.exports = isBanned