const config = require('../config.js');
const packageName = config.packageName

function mcserver(ip){
    if(!ip || typeof ip !== 'string') throw new Error(`[${packageName} Error] No se dió una IP`)
    const res = require('./fetch.js')(`https://api.miduwu.ga/json/minecraft?ip=${ip}`)
    if(res.status === 404){
        throw new Error(`[${packageName} Error] El servidor no existe o esta apagado!`)
    }
    if(res.status === 200){
        return res.data
    }
}

