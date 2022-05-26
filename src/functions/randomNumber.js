const config = require('../config.js');
const packageName = config.packageName

function randomString(length){
    if(typeof length !== 'number') throw new Error(`[${packageName} Error] No se dió un numero`)
    const characters ='1234567890'
    let result = '';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return Number(result)
}

module.exports = randomString