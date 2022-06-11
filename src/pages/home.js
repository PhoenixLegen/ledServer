const express = require('express')
const router = express.Router()
const app = express()

const ip = require("ip")
const ipaddr = ip.address()

const port = process.env.PORT || 3000

app.set('view-engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

router.get('/', function(req, res){
    res.render('home.ejs')
});

module.exports = router
