<div align="center">
  <br />
    <p>
      <img src="https://cdn.discordapp.com/attachments/862513652103512115/976011664564555816/Banner_2.png" alt="@jdaniel-dev/utils.js">
    <p>
  <br />
  <p>
    <a href="https://discord.gg/nB2Je6jjbs"><img src="https://img.shields.io/discord/875100568169889894?color=5865F2&logo=discord&logoColor=white" alt="Discord server" /></a>
    <a href="https://www.npmjs.com/package/@jdaniel-dev/utils.js"><img src="https://img.shields.io/npm/v/@jdaniel-dev/utils.js.svg?maxAge=3600" alt="npm version" /></a>
    <a href="https://www.npmjs.com/package/@jdaniel-dev/utils.js"><img src="https://img.shields.io/npm/dt/@jdaniel-dev/utils.js.svg?maxAge=3600" alt="npm downloads" /></a>
    <a href="https://www.npmjs.com/package/@jdaniel-dev/utils.js"><img src="https://img.shields.io/librariesio/dependents/npm/@jdaniel-dev/utils.js?maxAge=3600" alt="npm dependencies" /></a>
  </p>
</div>

# - Sobre
Este Package fue hecho para facilitar todo lo relacionado con el desarrollo de bots de discord, con un util ya hecho para quien guste
Base del utils sacado de [Tohru](https://tohru.ga/)

# - Este package fue marcado como *deprecated*, sin embargo hice una mejor version completamente compatible con typescript, vease [@kbc-studios/utils.js](https://www.npmjs.com/package/@kbc-studios/utils.js)

# - Instalando el Package
```
npm i @jdaniel-dev/utils.js
```
```
yarn add @jdaniel-dev/utils.js
```

# - Utilizando el Package
```js
const JDaniel_Util = require('@jdaniel-dev/utils.js')
const util = new JDaniel_Util()
/**
Para Setearlo en el client es solo:
client.util = new JDaniel_Util()
**/
```

# - Command Handler
Depende de como lo definiste pero este sería un ejemplo
```js
const JDaniel_Util = require('@jdaniel-dev/utils.js') //Llamamos el Paquete
const util = new JDaniel_Util() //Creas una nueva istancia del Paquete

client.comandos = new Discord.Collection()  //Creas el Map Collection donde se guardaran los comandos
util.loadCommands(client,'comandos')  //Cargas todos los comandos en la carpeta 'comandos'
```
Tambien te puede dar un error, ya que en el `index.js` no tienes definido los comandos, si es que si, debes cambiarlo a `comandos`, Ejemplo:
```js
//[Correcto]
client.comandos = new Discord.Collection()
//[Incorrecto]
client.commands = new Discord.Collection()
client.cmd = new Discord.Collection()
```

# - Bot de Ejemplo (Sin Command handler)
```js
const Discord = require('discord.js'); //Llamamos el paquete de discord
const client = new Discord.Client({
    intents: 32511
}) //Creas el cliente de discord
const JDaniel_Util = require('@jdaniel-dev/utils.js')
const util = new JDaniel_Util(client)

client.on('ready', () => {
    console.log('Bot Inicializado')
});

client.on('message', async(message) => {
    if(message.author.bot || message.channel.type === 'dm') return;
    const prefix = '!'
    if(message.content.toLowerCase() === 'hola'){
        message.channel.send(`Hola <@${message.author.id}>`)
    }
    if(!message.content.startsWith(prefix)) return;
    cons args = util.argsIfy(message)
    if(message.content.toLowerCase().slice(prefix.length) === 'ping') {
       message.channel.send(`Pong! ${client.ws.ping}ms`)
    }
    if(message.content.toLowerCase().slice(prefix.length) === 'random') {
        message.channel.send(`Numero al azar entre el 0 y 9: ${util.random(0, 9)}`)
    }
    if(message.content.toLowerCase().slice(prefix.length) === 'status') {
        message.channel.send(`CPU: ${util.cpuUsage()}% \nRAM: ${util.ramUsage()}`)
    }
    if(message.content.toLowerCase().slice(prefix.length) === 'say') {
        if(!args) return message.channel.send('Escribe el texto que quieres que diga!')
        message.channel.send(args.join(' '))
    }
    if(message.content.toLowerCase().slice(prefix.length) === 'rei') {
        message.channel.send(util.rei())
    }
});

client.login('token');//El token se consigue en el Developers Portal
```

# - Bot de Ejemplo (Con Command Handler)
```js
const Discord = require('discord.js');
const client = new Discord.Client({
    intents: 32511
})
const JDaniel_Util = require('@jdaniel-dev/utils.js')
const util = new JDaniel_Util(client)

client.comandos = new Discord.Collection()
util.loadCommands(client,'comandos')

client.on('ready', () => {
    console.log('Bot Inicializado')
});

client.on('message', async(message) => {
    if(message.author.bot || message.channel.type === 'dm') return;
    const prefix = '!'
    if(!prefix.some(p => message.content.startsWith(p))) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/)
    const commandName = args.shift().toLowerCase()
    const command = client.comandos.get(commandName) || client.comandos.find(cmd => cmd.aliases && cmd.aliases.includes(commandName))
    const JDaniel_Util = require('@jdaniel-dev/utils.js')
    const util = new JDaniel_Util(client)
    if(!command) return;
    const d = {
      message,
      client,
      args,
      util
    };
    try {
      command.execute(d)
    } catch (e) {
      console.log(e)
    }
});

client.login('token');//El token se consigue en el Developers Portal
```
# - Base de Comando (Del Handler)
```js
const { Discord, MessageEmbed, MessageAttachment } = require('discord.js')

module.exports = {
  name: "", //Nombre de Tu comando
  aliases: [], //Alias de tu comandos (Este es en Array)
  async execute(d){
    //Aquí el codigo, si se evalua d, este retornara args, client y message
  }
}
```

# - Crear Funciones Personalizadas
```js
<util>.create(/*Nombre de la Función*/, /*Lo que retornara*/)
```
- Ejemplo:
```js
<util>.create('fakeIP', () => {
  function random(min, max){
    Math.floor(Math.random() * (max - min)) + min
  }
  return `${random(0,250)}.${random(0,250)}.${random(0,250)}.${random(0,250)}`
})
```

# - Function Handler
Para cargar una función desde una carpeta dada debe ser así:
```js
<util>.loadFunctions(Directorio)
```
- Ejemplo:
```js
<util>.loadFunction('Custom')
```
(`./Custom/test.js`)
```js
module.exports = {
  name: 'test',
  test(params){
    console.log(`Testeo! ${params}`)
  }
}
```

# - Funciones
```js
<util>.update()
```
```js
<util>.reboot()
```
```js
async <util>.eval('Codigo')
```
```js
<util>.execute('Comando')
```
```js
<util>.random(min, max)
```
```js
<util>.randomText(['array1', 'array2'...], 1)
```
```js
<util>.randomString(length)
```
```js
<util>.ramUsage()
```
```js
<util>.cpuUsage()
```
```js
async <util>.loadCommands(client,'comandos')
```
```js
async <util>.getMember(message, d.args)
```
```js
async <util>.getUser(message, d.args)
```
```js
<util>.meme()
```
```js
async <util>.fetch(URL)
```
```js
<util>.argsIfy(message)
```
```js
<util>.rei()
```
```js
<util>.error(message, error)
```
```js
<util>.has(array, message)
```
```js
<util>.allMembersCount(client)
```
```js
async <util>.rule34(busqueda)
```
```js
<util>.math(operación)
```
```js
<util>.isHex(Color en Hexadecimal)
```
```js
<util>.isSnowflake(ID)
```
```js
<util>.isBanned(Usuario (El Objeto de un usuario de discord), Servidor (El Objeto de un servidor de discord))
```
```js
async <util>.isVoted(Usuario (El Objeto de un usuario de discord), Token de Top.gg)
```
```js
<util>.getWebhook(URL (URL del Webhook)) //Funciona similar a un canal (https://discord.js.org/#/docs/discord.js/stable/class/WebhookClient)
```
```js
<util>.getSource(Función)
```
```js
<util>.fakeHack(username)
```

# - Enlaces
[Soporte](https://discord.gg/nB2Je6jjbs) (El Servidor es de Soporte de Tohru, pero sera también Utilizado para Soporte de este package)

[Portal de Desarrolladores](https://discord.com/developers/applications)

[Github](https://github.com/JDaniel4562/-jdaniel-dev-utils.js)
