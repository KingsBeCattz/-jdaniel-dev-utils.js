const config = require('../config.js');
const packageName = config.packageName

async function loadCommands(client,CmdFolder){
    if(typeof client !== 'object') throw new Error(`[${packageName} Error] No se dió le cliente de Discord`)
    if(!client.comandos) throw new Error(`[${packageName} Error] Para poder leer los comandos, en tu index.js escribe: \nclient.comandos = new Discord.Collection();`)
    if(typeof CmdFolder !== 'string') throw new Error(`[${packageName} Error] No se dió la Carpeta a leer Comandos`)
    const fs = require('fs')
    const foldersCommands = fs.readdirSync(`./${CmdFolder}`)
        for (const files of foldersCommands) {
            const folder = fs.readdirSync(`./${CmdFolder}/${files}/`).filter(file => file.endsWith(".js"))
            for (const commands of folder) {
                delete require.cache[require.resolve(`../${CmdFolder}/${files}/${commands}`)];
                const command = require(`../${CmdFolder}/${files}/${commands}`)
            try{
                if(!command.name) continue;
                client.comandos.delete(command.name)
                client.comandos.set(command.name, command)
            } catch(e) {
                console.log(`Error loading: ${command.name}`)
            }
        }
    }
}

module.exports = loadCommands