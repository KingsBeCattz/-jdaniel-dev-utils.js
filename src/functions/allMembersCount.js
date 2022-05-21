const config = require('../config.js');
const packageName = config.packageName

function allMembersCount(client){
    if(!client && typeof client !== 'object') throw new Error(`[${packageName} Error] No se dió el Cliente! (discord.js.org/#/docs/discord.js/stable/class/Client)`)
    return client?.guilds.cache.map((g) => g.memberCount || 0).reduce((x, y) => x + y, 0)
}

module.exports = allMembersCount