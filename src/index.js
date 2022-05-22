const config = require('./config.js');
const packageName = 'Utils';
const package = require('../package.json');
const version = package.version

/**
Ya que estas aquí, unete!
https://discord.gg/nB2Je6jjbs
*/

class JDaniel_Util {
	constructor (client) {
		this.version = version,
		this.update = require('./functions/util/update.js')
		this.reboot = require('./functions/util/reboot.js')
		this.client = client,
		this.random = require('./functions/random.js')
		this.randomText = require('./functions/randomText.js')
		this.randomString = require('./functions/randomString.js')
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
	}
}
module.exports = JDaniel_Util

/**
Ya que estas aquí, unete!
https://discord.gg/nB2Je6jjbs
*/