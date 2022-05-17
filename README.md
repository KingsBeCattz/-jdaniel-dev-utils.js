# Sobre
Este Package fue hecho para facilitar todo lo relacionado con el desarrollo de bots de discord, con un util ya hecho para quien guste
Base del utils sacado de [Tohru](https://tohru.ga/)

# Instalando el Package
```
npm i @jdaniel-dev/utils.js
```

# Utilizando el Package
```js
const JDaniel_Util = require('@jdaniel-dev/utils.js')
const util = new JDaniel_Util()
/**
Para Setearlo en el client es solo:
client.util = new JDaniel_Util()
**/
```

# Command Handler
Depende de como lo definiste pero este sería un ejemplo
```js
const JDaniel_Util = require('@jdaniel-dev/utils.js')
const util = new JDaniel_Util()

client.comandos = new Discord.Collection()
util.loadCommands(client,'comandos')
```
Tambien te puede dar un error, ya que en el `index.js` no tienes definido los comandos, si es que si, debes cambiarlo a `comandos`, Ejemplo:
```js
//[Correcto]
client.comandos = new Discord.Collection()
//[Incorrecto]
client.commands = new Discord.Collection()
client.cmd = new Discord.Collection()
```

# Bot de Ejemplo (Con Command handler)
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
    if(message.content.toLowerCase() === 'hola'){
        message.channel.send(`Hola <@${message.author.id}>`)
    }
    if(!message.content.startsWith(prefix)) return;
    cons args = util.functions.argsIfy(message, prefix)
    if(message.content.toLowerCase().slice(prefix.length) === 'ping') {
       message.channel.send(`Pong! ${client.ws.ping}ms`)
    }
    if(message.content.toLowerCase().slice(prefix.length) === 'random') {
        message.channel.send(`Numero al azar entre el 0 y 9: ${util.functions.random(0, 9)}`)
    }
    if(message.content.toLowerCase().slice(prefix.length) === 'status') {
        message.channel.send(`CPU: ${util.functions.cpuUsage()}% \nRAM: ${util.functions.ramUsage()}`)
    }
    if(message.content.toLowerCase().slice(prefix.length) === 'say') {
        if(!args) return message.channel.send('Escribe el texto que quieres que diga!')
        message.channel.send(args)
    }
    if(message.content.toLowerCase().slice(prefix.length) === 'rei') {
        message.channel.send(util.functions.rei())
    }
});

client.login('token');//El token se consigue en el Developers Portal
```

# Funciones
```js
<util>.update()
```
```js
<util>.reboot()
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

# Soporte
[Server](https://discord.gg/nB2Je6jjbs) (El Servidor es de Soporte de Tohru, pero sera también Utilizado para Soporte de este package)