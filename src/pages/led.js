const express = require('express')
const router = express.Router()
const app = express()

const Gpio = require('ledcontrol')

const ip = require("ip")
const ipaddr = ip.address()

const port = process.env.PORT || 3000

function readStateWeb(state){
    if (state == 'on'){
        return 'on'
    }
    else if (state == 'off'){
        return 'off'
    }
};

router.get('/pin/:pin/led', (req, res) => {
    var pin = req.params.pin;
    var state = req.query.state;
    const ledPin = new Gpio.led(pin)
    ledPin.init();

    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Rpi led server</title>
            <style>
                .on {
                background-color: red; /* Green */
                border: none;
                color: white;
                padding: 32px 32px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                font-size: 16px;
                margin: 4px 2px;
                cursor: pointer;
                }
                .off {
                background-color: black; /* Green */
                border: none;
                color: white;
                padding: 32px 32px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                font-size: 16px;
                margin: 4px 2px;
                cursor: pointer;
                }
                </style>
        </head>
        <body>
            <h1>RPi led server</h1>
            <p> <button class="on" onclick="window.location='http://${ipaddr}:${port}/pin/${pin}/led?state=on';" value="click here" width="40px" >on</button>   <button class="off" onclick="window.location='http://${ipaddr}:${port}/pin/${pin}/led?state=off';" value="click here" width="40px" >off</button></p>
            <h3>led is ${readStateWeb(state)}</h3>
            <p><a href="http://${ipaddr}:${port}/">return to home</a></p>
        </body>
        </html>
    `);
    
    if (state == "on"){
        ledPin.on();
    }
    else if(state == "off"){
        ledPin.off();
    };
});

module.exports = router