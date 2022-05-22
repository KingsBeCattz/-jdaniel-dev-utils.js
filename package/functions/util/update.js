const config = require('../../config.js');
const packageName = config.packageName

function update(){
    const { execSync } = require('child_process')
    const res = execSync(`npm i @jdaniel-dev/utils.js@latest`).toString()
    console.log(res)
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
}

module.exports = update