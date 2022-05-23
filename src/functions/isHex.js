const config = require('../config.js');
const packageName = config.packageName

function isHex(hex){
    if(!hex || typeof hex !== 'string') return false
    const code = hex.replace(/(#)/g, '')
    const regex = new RegExp("^([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$")
    return regex.test(code)
}

module.exports = isHex