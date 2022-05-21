const config = require('../../config.js');
const packageName = config.packageName

function reboot(){
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

module.exports = reboot