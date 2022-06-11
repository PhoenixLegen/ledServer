const express = require('express')
const router = express.Router()
const app = express()

app.set('view-engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

router.get('/helloSumaAthe', (req, res) => {
    res.render('helloSumaAthe.ejs')
})

module.exports = router