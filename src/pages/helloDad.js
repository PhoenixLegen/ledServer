const express = require('express')
const router = express.Router()

router.get('/helloDad', (req, res) => {
    res.render('../views/helloDad.ejs')
})

module.exports = router