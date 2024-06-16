const packageName = 'Utils';
const version = require('../package.json').version
const { lstatSync, readdirSync } = require('fs')
const { join } = require('path')
var colors = require('colors')

/**
Ya que estas aquí, unete!
https://discord.gg/nB2Je6jjbs
*/

class Util {
	constructor (client) {
		if(!client) throw new Error(`[${packageName} Error] No se dió el Cliente (https://discord.js.org/#/docs/discord.js/stable/class/Client)`)
		
		setInterval(() => console.log("ESTE PACKAGE HA SIDO MARCADO COMO OBSOLETO, OBTENGA UNA NUEVA VERSION CON ACTUALIZACIONES AQUI: https://www.npmjs.com/package/@kbc-studios/utils.js \nTHIS PACKAGE HAS BEEN MARKED AS DEPRECATED, GET A NEW VERSION WITH UPDATES HERE: https://www.npmjs.com/package/@kbc-studios/utils.js"))
		
		this.version = version
		//this.latest = require('child_process').execSync('npm info @jdaniel-dev/utils.js').toString().replaceAll('@', ' ').slice().trim().split(/ +/)[1]
		this.update = require('./functions/util/update.js')
		this.reboot = require('./functions/util/reboot.js')
		this.eval = require('./functions/util/eval.js')
		this.execute = require('./functions/util/execute.js')
		this.client = client
		this.random = require('./functions/random.js')
		this.randomText = require('./functions/randomText.js')
		this.randomString = require('./functions/randomString.js')
		this.randomNumber = require('./functions/randomNumber.js')
		this.ramUsage = require('./functions/ramUsage.js')
		this.cpuUsage = require('./functions/cpuUsage.js')
		this.loadCommands = require('./functions/loadCommands.js')
		this.getMember = require('./functions/getMember.js')
		this.getUser = require('./functions/getUser.js')
		this.meme = require('./functions/meme.js')
		this.reddit_meme = require('./functions/reddit_meme.js')
		this.soi = require('./functions/soi.js')
		this.fetch = require('./functions/fetch.js')
		this.argsIfy = require('./functions/argsIfy.js')
		this.rei = require('./functions/rei.js')
		this.error = require('./functions/error.js')
		this.has = require('./functions/has.js')
		this.allMembersCount = require('./functions/allMembersCount.js')
		this.rule34 = require('./functions/rule34.js')
		this.math = require('./functions/math.js')
		this.isHex = require('./functions/isHex.js')
		this.isSnowflake = require('./functions/isSnowflake.js')
		this.isBanned = require('./functions/isBanned.js')
		this.isVoted = require('./functions/isVoted.js')
		this.getWebhook = require('./functions/getWebhook.js')
		this.getSource = require('./functions/getSource.js')
		this.fakeHack = require('./functions/fakeHack.js')
	}
	create(name, value) {
		return new Promise((res, rej) => {
			if(typeof name !== 'string') rej(`[${packageName} Error] Debes de ponerle nombre a lo que quieres crear!`)
			if(!value) rej(`[${packageName} Error] Debes escribir lo que debes de crear, puede ser una function, un arrow function, string, array o lo que sea!`)
			this[name] = value
			res(this)
		})
    }
	delete(name) {
		return new Promise((res, rej) => {
			if(typeof name !== 'string') rej(`[${packageName} Error] Debes de ponerle nombre a lo que quieres eliminar!`)
        	if(!this[name]) rej(`[${packageName} Error] "${name}" no existe!`)
			delete this[name]
			res(this)
		})
    }
	loadFunctions(dir){
		return new Promise((res, rej) => {
			console.log('|----------------------------------------|')
        	let mdir = process.cwd()
        	let modules = readdirSync(join(mdir, dir))
        	for(const file of modules) {
        	    let stat = lstatSync(join(mdir, dir, file))
        	    if(stat.isDirectory()) { this.loadFunctions(join(dir, file), client, r); continue }
        	    delete require.cache[require(join(mdir, dir, file))]
        	    let f = require(join(mdir, dir, file))
				if(!f.name || f[f.name]) console.log(`| ` + 'Error Loading'.green + `\n| From: ${join(dir, file)}` + '|----------------------------------------|')
        	    this[f.name] = f[f.name]
				console.log(`| ` + 'Function Loaded'.green + `\n| Name: ${f.name}` + `\n| From: ${join(dir, file)}` + '|----------------------------------------|')
				res(this)
        	}
		})
    }
}
module.exports = Util

/**
Ya que estas aquí, unete!
https://discord.gg/nB2Je6jjbs
*/