const express = require('express')
const router = express.Router()

router.get('/helloDad', (req, res) => {
    res.render('helloDad.ejs')
})

module.exports = router