const express = require('express')
const router = express.Router()
const app = express()

const { readFileSync } = require('fs')

const users = JSON.parse(readFileSync('/home/sudhir/Documents/ledServer/src/users.json'))

app.set('view-engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

router.get('/login', (req, res) => {
    res.render('login.ejs')
})

router.post('/login', (req, res) => {
    try {
        const email = req.body.email
        const password = req.body.password
        if (email == users.users.sudhir.email & password == users.users.sudhir.password){
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