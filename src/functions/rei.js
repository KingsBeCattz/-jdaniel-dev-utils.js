const config = require('../config.js');
const packageName = config.packageName

function rei(){
    const images = require('../images/rei.js')
    return images[Math.floor(Math.random() * images.length)]
}

module.exports = rei