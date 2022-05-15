const packageName = require('../config.js').packageName

function cpuUsage(decimals=2){
    if(typeof decimals !== 'number') throw new Error(`[${packageName} Error] No se dió un numero para las Decimales`)
	var result; 
	const cpus = require('os').cpus(); 
	const avgs = cpus.map(cpu => { 
		const total = Object.values(cpu.times).reduce((a, b) => a + b); 
		const nonIdle = total - cpu.times.idle; return nonIdle / total
	});
	result = (avgs.reduce((a, b) => a + b) / cpus.length).toFixed(decimals);
	return result
}

module.exports = cpuUsage(decimals=2)