const { lstatSync, readdirSync } = require('fs')
const { join } = require('path')
var colors = require('colors')

async function loadCommands(dir, client, r){
  return new Promise((res, rej) => {
    let mdir = process.cwd()
    let modules = readdirSync(join(mdir, dir))
    for(const file of modules) {
      let stat = lstatSync(join(mdir, dir, file))
      if(stat.isDirectory()) { this.loadCommands(join(dir, file), client, r); continue }
      delete require.cache[require(join(mdir, dir, file))]
      let command = require(join(mdir, dir, file))
      if(!command?.name) { console.log('|-----------------------------------|\n' + `| ` + `Error Loading!`.red + `\n| Name: ${command.name} \n| From: ${join(dir, file)}`); continue};
      client[r].set(command.name, command)
      console.log('|-----------------------------------|\n' + `| ` + `Command Loaded!`.green + `\n| Name: ${command.name} \n| From: ${join(dir, file)}`)
    }
    res(client[r])
    console.log('|-----------------------------------|')
  })
}

module.exports = loadCommands