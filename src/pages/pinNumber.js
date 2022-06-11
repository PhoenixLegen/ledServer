const express = require('express')
const router = express.Router()
const app = express()

const ip = require("ip")
const ipaddr = ip.address()

const port = process.env.PORT || 3000

router.get('/pin/:pin', (req, res) => {
    var pin = req.params.pin
    
    res.write(`
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
            <p> <button class="on" onclick="window.location='/pin/${pin}/led?state=on';" value="click here" width="40px" >on</button>   <button class="off" onclick="window.location='/pin/${pin}/led?state=off';" value="click here" width="40px" >off</button></p>
            <p><a href="/">return to home</a></p>
        </body>
        </html>
    `)
});

module.exports = router