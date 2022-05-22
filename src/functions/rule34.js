const config = require('../config.js');
const packageName = config.packageName

async function rule34(busqueda){
    try {
        const fetch = require('node-fetch')
        if(busqueda && typeof busqueda !== 'string') throw new Error(`[${packageName} Error] No se dió una busqueda!`)
        let search = encodeURIComponent(busqueda)
        const res = await fetch(`https://r34-json-api.herokuapp.com/posts?tags=${search}`)
        const rule34 = await res.json()
        let r34 = rule34[Math.floor(Math.random() * rule34.length)]
        r34.file_url = r34.file_url.replace('https://r34-json-api.herokuapp.com/images?url=', '')
        r34.sample_url = r34.sample_url.replace('https://r34-json-api.herokuapp.com/images?url=', '')
        r34.preview_url = r34.preview_url.replace('https://r34-json-api.herokuapp.com/images?url=', '')
        r34.comments_url = r34.comments_url.replace('https://r34-json-api.herokuapp.com/comments?post_id=', 'https://rule34.xxx/index.php?page=post&s=view&id=')
        return r34
    } catch (e) {
        const obj = {
            "message": "No se encontrarón resultados",
            "code": 404
        }
        console.log(`[${packageName} Error > Rule34] ${e}`)
        return obj
    }
}

module.exports = rule34