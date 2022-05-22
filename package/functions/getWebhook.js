const config = require('../config.js');
const packageName = config.packageName

function getWebhook(url){
    try {
        const webhook = new Discord.WebhookClient({
            url: url
        })
        return webhook
    } catch (e) {
        return undefined
    }
}

module.exports = getWebhook