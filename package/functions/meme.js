const config = require('../config.js');
const packageName = config.packageName

function meme(){
    const images = require('../images/memes.js.js')
    return images[Math.floor(Math.random() * images.length)]
}

module.exports = meme