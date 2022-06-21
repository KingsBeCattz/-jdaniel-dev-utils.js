const packageName = 'Utils';
const version = require('../package.json').version

/**
Ya que estas aquí, unete!
https://discord.gg/nB2Je6jjbs
*/

class Util {
	constructor (client) {
		if(!client) throw new Error(`[${packageName} Error] No se dió el Cliente (https://discord.js.org/#/docs/discord.js/stable/class/Client)`)
		
		this.version = version
		this.latest = require('child_process').execSync('npm info @jdaniel-dev/utils.js').toString().replaceAll('@', ' ').slice().trim().split(/ +/)[1]
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
	create(name, returns) {
        this[name] = returns
    }
}
module.exports = Util

/**
Ya que estas aquí, unete!
https://discord.gg/nB2Je6jjbs
*/