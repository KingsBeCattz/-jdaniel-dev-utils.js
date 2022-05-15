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

client.comandos = new Discord.Collection()
util.loadCommands(client,'comandos')

client.on('ready', () => {
    console.log('Bot Inicializado')
});

client.on('message', async(message) => {
    if(message.author.bot || message.channel.type === 'dm') return;
    if(message.content === 'ping') {
       message.channel.send(`Pong! ${client.ws.ping}ms`)
    }
});

client.login('token');//El token se consigue en el Developers Portal
```

# Soporte
[Server](https://discord.gg/nB2Je6jjbs) (El Servidor es de Soporte de Tohru, pero sera también Utilizado para Soporte de este package)