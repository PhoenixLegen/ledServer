const express = require('express')
const router = express.Router()

router.get('/helloMom', (req, res) => {
    res.render('hello.ejs')
})

module.exports = router