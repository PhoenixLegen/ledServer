const express = require('express')
const router = express.Router()
const app = express()

app.set('view-engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

router.get('/helloSathishmama', (req, res) => {
    res.render('helloSathishmama.ejs')
})

module.exports = router