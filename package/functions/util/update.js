const config = require('../../config.js');
const packageName = config.packageName

function update(){
    const { execSync } = require('child_process')
    const res = execSync(`npm i @jdaniel-dev/utils.js@latest`).toString()
    console.log(res)
    require('./reboot.js')()
}

module.exports = update