const config = require('../config.js');
const packageName = config.packageName

async function soi(){
    const fetch = require('node-fetch')
    const result = await fetch('https://shot-on-iphone.studio/api/video')
    try {
        const json = await result.json()
        const video = (await json).url
        return video
    } catch (e) {
        return(`[${packageName} Error > Shot-on-Iphone.studio] ${e}`)
    }
}

module.exports = soi