const config = require('../../config.js');
const packageName = config.packageName
const { create } = require('sourcebin')

async function evaluate(command){
    if(!command) throw new Error(`[${packageName} Error] Debes poner el codigo a evaluar`)
    let t = Date.now();
    let evaluated = await eval(command)
    if(evaluated.toString().length >= 1024){
        let e = await create([
            {
                content: evaluated.toString(),
                language: 'javascript'
            },
        ],
        {
            title: 'Evaluación Exitosa!',
            description: 'El Eval es muy largo, por ello aquí esta!'
        })
        evaluated = e
    }
    let res = {}
    res.code = `${command}`
    res.result = evaluated
    res.type = typeof evaluated
    res.latencia = t - Date.now()
    return res
}

module.exports = evaluate