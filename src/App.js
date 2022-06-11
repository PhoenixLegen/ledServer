const express = require('express');
const app = express();

const pages = {
    pin: require('./pages/pin'),
    home: require('./pages/home'),
    led: require('./pages/led'),
    pinNumber: require('./pages/pinNumber'),
    helloMom: require('./pages/hello'),
    helloDad: require('./pages/helloDad'),
    login: require('./pages/login')
}

const Gpio = require('ledcontrol')

const ip = require("ip")
const ipaddr = ip.address()

const port = process.env.PORT || 3000

app.set('view-engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

// app.get('/pin', (req, res) => {
//     res.render('index.ejs')
// })

app.use('/', pages.pin)
app.use('/', pages.home)
app.use('/', pages.led)
app.use('/', pages.pinNumber)
app.use('/', pages.helloMom)
app.use('/', pages.helloDad)
app.use('/', pages.login)

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));