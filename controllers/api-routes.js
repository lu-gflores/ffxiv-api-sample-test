const XIVAPI = require('xivapi-js')
const xiv = new XIVAPI()

module.exports = function (app) {
    app.get('/api/item', async (res, req) => {
        try {
            let item = await xiv.search('Shroud Cherry Sapling')
            res.json(item)
        } catch (err) {
            console.log(err.message)
        }
    })
}


