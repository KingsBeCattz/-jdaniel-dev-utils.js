const config = require('../config.js');
const packageName = config.packageName

function randomText(array, length=1){
    if(typeof array !== 'object') throw new Error(`[${packageName} Error] No se ha dado los Textos a elegir en Array`)
    if(typeof length !== 'number') throw new Error(`[${packageName} Error] No se ha dado el Numero de cuantos textos se darán`)
    let output;
    if(array.length < length) {
        output = array
    } else {
        let w3 = []
        let j = 0
        while(j < length) {
        const random = Math.floor(Math.random() * array.length)
        if(w3.includes(array[random]) === true) continue;
        w3.push(array[random]);
        j++
    }
        output = w3
    }
    return output
}

module.exports = randomText