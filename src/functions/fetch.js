const config = require('../config.js');
const packageName = config.packageName

async function fetch(URL, headers){
    const fetch = require('node-fetch')
    if(typeof URL !== 'string') throw new Error(`[${packageName} Error] No se dió una URL valida`)
    if(headers && typeof headers !== 'object') throw new Error(`[${packageName} Error] Los headers son así: {"Nombre": "Valor"}`)
    try {
        return new Promise((res) => {
            (async () => {
                const json = await (await fetch(URL, {headers: headers})).json()
                res(json)
            })()
        })
    } catch (e) {
        return(`[${packageName} Error > Fetch] ${e}`)
    }
}

module.exports = fetch