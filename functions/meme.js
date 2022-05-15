const shinobumemes = require('shinobu-memes')
const spanish = require('spanish.memes')
const packageName = require('../config.js').packageName

function meme(){
    let memes = []
    memes.push(shinobumemes.Shinobumemes().replace('media.discordapp','cdn.discordapp').replace('discordapp.net','discordapp.com'))
    memes.push(spanish.Meme().replace('media.discordapp','cdn.discordapp').replace('discordapp.net','discordapp.com'))
    let res = memes[Math.floor(Math.random() * memes.length)]
    return res
}

module.exports = meme()