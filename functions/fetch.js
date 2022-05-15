const fetch = require('node-fetch')
const packageName = require('../config.js').packageName

async function fetch(URL, headers){
    if(typeof URL !== 'string') throw new Error(`[${packageName} Error] No se dió una URL valida`)
    if(headers && typeof headers !== 'object') throw new Error(`[${packageName} Error] Los headers son así: {"Nombre": "Valor"}`)
    const res = await (await fetch(URL,{headers:headers})).json()
    return res
}

module.exports = fetch(URL, headers)