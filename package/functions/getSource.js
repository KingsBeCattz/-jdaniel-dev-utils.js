function getSource(func){
    if(!func || typeof func !== 'string') return undefined
    try {
        if(func.toLowerCase() === 'update' || func.toLowerCase() === 'reboot'){
            const res = require(`./util/${func.toLowerCase()}`)
            return res
        } else {
            const res = require(`./${func.toLowerCase()}`)
            return res
        }
    } catch (e) {
        return undefined
    }
}

module.exports = getSource