function getSource(func){
    if(!func || typeof func !== 'string') return undefined
    try {
        if(func.toLowerCase() === 'update' || func.toLowerCase() === 'reboot' || func.toLowerCase() === 'execute' || func.toLowerCase() === 'eval'){
            const res = require(`./util/${func.toLowerCase()}`)
            return res.toString()
        } else {
            const res = require(`./${func.toLowerCase()}`)
            return res.toString()
        }
    } catch (e) {
        return undefined
    }
}

module.exports = getSource