const config = require('../config.js');
const packageName = config.packageName

async function isVoted(user, token){
    const fetch = require('node-fetch')
    let first = await fetch(`https://top.gg/api/bots/862482131375489054/check?userId=${user.id}`, {headers: {
        "Authorization": token
    }})
    let json = await first.json()
    return json.voted ? true: false
}

module.exports = isVoted