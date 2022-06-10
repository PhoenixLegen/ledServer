const express = require('express')
const router = express.Router()

router.get('/helloMom', (req, res) => {
    res.render('../views/hello.ejs')
})

module.exports = router