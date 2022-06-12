const config = require('../config.js');
const packageName = config.packageName

function fakeHack(username){
    if(!username || typeof username !== 'string') throw new Error(`[${packageName} Error] No se dió un nombre valido, este debe de ser un string, no ${username}`)
    let continentes = ['Norte America', 'Centro America', 'Sur America', 'Europa', 'Asia', 'Oceanía', 'Africa']
    let m = ['@gmail.com','@hotmail.com','@outlook.com','@discord.com','@pornhub.com','@tohru.ga']
    let random = require('./random.js')
    let randomString = require('./randomString.js')
    let res = {}
    res.continent = continentes[Math.floor(Math.random() * continentes.length)]
    res.ip = `${random(0,250)}.${random(0,250)}.${random(0,250)}.${random(0,250)}`
    res.number = `+${random(1,120)} (${random(1,999)}) ${random(001,999)}-${random(0001,9999)}`
    res.mail = username + m[Math.floor(Math.random() * m.length)]
    res.password = `${randomString(8)}.${randomString(4)}.${randomString(2)}@${randomString(9)}`
    return res
}

module.exports = fakeHack