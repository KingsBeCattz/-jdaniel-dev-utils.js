const config = require('../config.js');
const packageName = config.packageName
const fetch = require('node-fetch')

async function reddit_meme(filter){
    if(!filter || typeof filter !== 'string'){
        const res = await (await fetch('https://www.reddit.com/r/spanishmemes.json')).json()
        const d = res.data.children
        const random = Math.floor(Math.random() * d.length)
        return d[random].data
    } else {
        const res = await (await fetch('https://www.reddit.com/r/spanishmemes.json')).json()
        const d = res.data.children.filter(obj => obj.data.url.endsWith(filter))
        const random = Math.floor(Math.random() * d.length)
        return d[random].data
    }
}

module.exports = reddit_meme