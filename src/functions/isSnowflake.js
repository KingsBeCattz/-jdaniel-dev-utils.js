const config = require('../config.js');
const packageName = config.packageName

function isSnowflake(snowflake){
    if(!snowflake || typeof snowflake !== 'string') return false
    if(snowflake.length > 18 || snowflake.length < 18) return false
    if(!Number(snowflake)) return false
    return true
}

module.exports = isSnowflake