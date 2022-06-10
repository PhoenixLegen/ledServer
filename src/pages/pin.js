const express = require('express')
const router = express.Router()
const app = express()

app.set('view-engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

router.get('/pin', (req, res) => {
    res.render('../views/index.ejs')
})

router.post('/pin', async(req, res) => {
    try{
        const pin = req.body.test
        res.redirect(`/pin/${pin}`)
    } catch{
        console.log('there was an error')
    }
})

module.exports = router