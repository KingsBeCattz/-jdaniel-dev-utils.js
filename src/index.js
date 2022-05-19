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
		this.update = () => {
			const { execSync } = require('child_process')
			const res = execSync(`npm i @jdaniel-dev/utils.js@latest`).toString()
			console.log(res)
			return res
		},
		this.client = client,
		this.testing = {
			random(min, max){
				require('./functions/random.js')(min, max)
			}
		},
		this.reboot = () => {
			try {
				process.on("exit", () => {
					require("child_process").spawn(process.argv.shift(), process.argv, {
						cwd: process.cwd(),
						detached: true,
						stdio: "inherit",
					});
				});
				process.exit();
			} catch (e) {
				throw new Error(`[${packageName} Error] No podimos reiniciar! Error: ${e.message}`)
			}
		},
		this.random = (min, max) => {
			if(typeof min !== 'number') throw new Error(`[${packageName} Error] No se dió el Minimo`)
			if(typeof max !== 'number') throw new Error(`[${packageName} Error] No se dió el Maximo`)
			return Math.floor(Math.random() * (max - min)) + min;
		},
		this.randomText = (array, length=1) => {
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
		this.randomString = (length) => {
			if(typeof length !== 'number') throw new Error(`[${packageName} Error] No se dió un numero`)
			const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz'
			let result = '';
			const charactersLength = characters.length;
			for ( let i = 0; i < length; i++ ) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
			}
			return result
		},
		this.ramUsage = (decimals=2,format='MB') => {
			if(format.toUpperCase() !== 'MB' || format.toUpperCase() !== 'GB' || typeof format !== 'string') throw new Error(`[${packageName} Error] No se dió un Typo valido, solo se es valido MB y GB`)
			if(typeof decimals !== 'number') throw new Error(`[${packageName} Error] No se dió un numero para las Decimales`)
			if(format.toUpperCase() === 'MB'){
				let result = (process.memoryUsage().rss / 1024 / 1024).toFixed(decimals)
				return result+format
			} else {
				let result = (process.memoryUsage().rss / 1024 / 1024 / 1024).toFixed(decimals)
				return result+format
			}
		},
		this.cpuUsage = (decimals=2) => {
			if(typeof decimals !== 'number') throw new Error(`[${packageName} Error] No se dió un numero para las Decimales`)
			let result; const cpus = require('os').cpus(); const avgs = cpus.map(cpu => { const total = Object.values(cpu.times).reduce((a, b) => a + b); const nonIdle = total - cpu.times.idle; return nonIdle / total}); result = (avgs.reduce((a, b) => a + b) / cpus.length).toFixed(decimals);
			return result
		},
		this.loadCommands = async (client,CmdFolder) => {
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
		},
		this.getMember = async (message, id, returnAuthor=false) => {
			if(!message) throw new Error(`[${packageName} Error] No se dió un Mensaje a analizar`)
			let user = id?.replace(/[^0-9]/g, '')?.replace(/ /g, '')
			if (!user && !returnAuthor) return null;
			if(!user && returnAuthor) return message.member
			let m;
			m = message.guild.members.cache.get(user)
			if(!m) m = await message.guild.members.fetch(user).catch(e=>null)
			if(!m && returnAuthor) return message.member
			return m
		},
		this.getUser = async (message, id, returnAuthor=false) => {
			if(!message) throw new Error(`[${packageName} Error] No se dió un Mensaje a analizar`)
			let user = id?.replace(/[^0-9]/g, '')?.replace(/ /g, '')
			if (!user && !returnAuthor) return null;
			if(!user && returnAuthor) return message.author
			let m;
			m = client.users.cache.get(user)
			if(!m) m = await client.users.fetch(user).catch(e=>null)
			if(!m && returnAuthor) return message.author
			return m
		},
		this.meme = () => {
			const shinobumemes = require('shinobu-memes')
			const spanish = require('spanish.memes')
			let memes = []
			memes.push(shinobumemes.Shinobumemes().replace('media.discordapp','cdn.discordapp').replace('discordapp.net','discordapp.com'))
			memes.push(spanish.Meme().replace('media.discordapp','cdn.discordapp').replace('discordapp.net','discordapp.com'))
			return memes[Math.floor(Math.random() * memes.length)]
		},
		this.soi = async () => {
			const fetch = require('node-fetch')
			const result = await fetch('https://shot-on-iphone.studio/api/video')
    		try {
				const json = await result.json()
				const video = (await json).url
				return video
			} catch (e) {
				return(`[${packageName} Error > Shot-on-Iphone.studio] ${e}`)
			}
		},
		this.fetch = async (URL, headers) => {
			const fetch = require('node-fetch')
			if(typeof URL !== 'string') throw new Error(`[${packageName} Error] No se dió una URL valida`)
			if(headers && typeof headers !== 'object') throw new Error(`[${packageName} Error] Los headers son así: {"Nombre": "Valor"}`)
			try {
				const result = await fetch(URL, {headers: headers})
				const json = await result.json()
				return json
			} catch (e) {
				return(`[${packageName} Error > Fetch] ${e}`)
			}
		},
		this.argsIfy = (message) => {
			if(!message || typeof message !== 'object') throw new Error(`[${packageName} Error] No se dió el Message (https://discord.js.org/#/docs/discord.js/stable/class/Message)`)
			if(!message.content) return null
			let args = message.content?.slice().trim().split(/ +/)
			return args.slice(1)
		},
		this.rei = () => {
			const images = require('../images/rei.js')
			return images[Math.floor(Math.random() * images.length)]
		},
		this.error = (message, error, type='reply') => {
			const types = [ 'reply', 'send']
			if(!message || typeof message !== 'object') throw new Error(`[${packageName} Error] No se dió el Message (https://discord.js.org/#/docs/discord.js/stable/class/Message)`)
			if(!error || typeof error !== 'string') throw new Error(`[${packageName} Error] No se dió el mensaje de error!\nPD: Para el salto de línea, usa \n`)
			if(!types.some(t => type.toLowerCase().includes(t))) throw new Error(`[${packageName} Error] No haz dado un tipo valido, este debe ser reply o send`)
			if(type.toLowerCase() === 'reply'){
				message.reply(`Ocurrió un error inesperado! Error: ${error}`).then(msg => {
					return msg
				})
			} else {
				message.channel.send(`Ocurrió un error inesperado! Error: ${error}`).then(msg => {
					return msg
				})
			}
		},
		this.has = (array, message) => {
			if(!array || typeof array !== 'object') throw new Error(`[${packageName} Error] No se dió la lista de textos para ver si se tiene o no, este debe ser en array (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#examples)`)
			if(!message || typeof message !== 'string') throw new Error(`[${packageName} Error] No se dió el texto a analizar`)
			return array.some(f => message.includes(f))
		},
		this.allMembersCount = (client) => {
			if(!client && typeof client !== 'object') throw new Error(`[${packageName} Error] No se dió el Cliente! (discord.js.org/#/docs/discord.js/stable/class/Client)`)
			return client?.guilds.cache.map((g) => g.memberCount || 0).reduce((x, y) => x + y, 0)
		},
		this.rule34 = async (busqueda) => {
			try {
				const fetch = require('node-fetch')
				if(busqueda && typeof busqueda !== 'string') throw new Error(`[${packageName} Error] No se dió una busqueda!`)
				let search = encodeURIComponent(busqueda)
				const res = await fetch(`https://r34-json-api.herokuapp.com/posts?tags=${search}`)
				const rule34 = await res.json()
				let r34 = rule34[Math.floor(Math.random() * rule34.length)]
				r34.file_url = r34.file_url.replace('https://r34-json-api.herokuapp.com/images?url=', '')
				r34.sample_url = r34.sample_url.replace('https://r34-json-api.herokuapp.com/images?url=', '')
				r34.preview_url = r34.preview_url.replace('https://r34-json-api.herokuapp.com/images?url=', '')
				return r34
			} catch (e) {
				const obj = {
					"message": "No se encontrarón resultados",
					"code": 404
				}
				console.log(`[${packageName} Error > Rule34] ${e}`)
				return obj
			}
		},
		this.math = (op) => {
			if(!op || typeof (op) !== 'number') throw new Error(`[${packageName} Error] No se dió la operación matematica básica!`)
			const operators = ['+','-','*','/','(',')','0','1','2','3','4','5','6','7','8','9']
			if(!operators.some(filter => op.toString().includes(filter))) throw new Error(`[${packageName} Error] Se han utilizado operadores invalidos`)
			return Number(op)
		},
		this.isHex = (hex) => {
			if(!hex || typeof hex !== 'string') return false
			const code = hex.replace(/(#)/g, '')
			const regex = new RegExp("^([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$")
			return regex.test(code)
		},
		this.isSnowflake = (snowflake) => {
			if(!snowflake || typeof snowflake !== 'string') return false
			if(snowflake.length > 18 || snowflake.length < 18) return false
			if(!Number(snowflake)) return false
			return true
		},
		this.isBanned = (user, guild) => {
			if(!user || typeof user !== 'object') throw new Error(`[${packageName} Error] No se dió un usuario valido`)
			if(!guild || typeof guild !== 'object') throw new Error(`[${packageName} Error] No se dió un servidor valido`)
			return guild.bans.fetch(user.id)?false:true
		}
	}
}
module.exports = JDaniel_Util

/**
Ya que estas aquí, unete!
https://discord.gg/nB2Je6jjbs
*/