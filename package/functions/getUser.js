const config = require('../config.js');
const packageName = config.packageName

async function getUser(message, id, returnAuthor=false){
    if(!message) throw new Error(`[${packageName} Error] No se dió un Mensaje a analizar`)
    let user = id?.replace(/[^0-9]/g, '')?.replace(/ /g, '')
    if (!user && !returnAuthor) return null;
    if(!user && returnAuthor) return message.author
    let m;
    m = client.users.cache.get(user)
    if(!m) m = await client.users.fetch(user).catch(e=>null)
    if(!m && returnAuthor) return message.author
    return m
}

module.exports = getUser