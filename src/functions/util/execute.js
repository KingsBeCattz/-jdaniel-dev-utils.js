const config = require('../../config.js');
const packageName = config.packageName

function execute(command){
    const { execSync } = require('child_process')
    let res = execSync(command).toString()
    return res
}

module.exports = execute