const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json)


const XIVAPI = require('xivapi-js')
const xiv = new XIVAPI()

const searchItem = async () => {
    let res = await xiv.search('Stuffed Khloe')
    console.log(res.Results[0])
    return res.Results
}
searchItem()

app.listen(PORT, function () {
    console.log(`Server listening on port ${PORT}`)
})