const express = require('express')
const router = express.Router()
const app = express()

app.set('view-engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

router.get('/login', (req, res) => {
    res.render('login.ejs')
})

router.post('/login', (req, res) => {
    try {
        const email = req.body.email
        const password = req.body.password
        if (email == 'sudhircks@gmail.com' & password == 'Sudhir@28'){
            res.redirect('/pin')
        }
        else{
            res.send('wrong email or password')
        }
    } catch {
        res.status(400).send('there was an error')
    }
})

module.exports = router