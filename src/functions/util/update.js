const config = require('../../config.js');
const packageName = config.packageName

function update(){
    const { execSync } = require('child_process')
    const res = execSync(`npm i @jdaniel-dev/utils.js@latest`).toString()
    console.log(res)
    return res
}

module.exports = update