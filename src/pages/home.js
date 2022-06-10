const express = require('express')
const router = express.Router()
const app = express()

const ip = require("ip")
const ipaddr = ip.address()

const port = process.env.PORT || 3000

router.get('/', function(req, res){
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Rpi led server</title>
        <style>
            .led {
            background-color: rgba(255, 255, 0, 0.932); /* Green */
            border: none;
            color: rgb(255, 0, 0);
            padding: 32px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 2px;
            cursor: pointer;
            }
            .hello {
            background-color: rgb(0, 252, 34); /* Green */
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
        <div> 
            <button class="led" onclick="window.location='http://${ipaddr}:${port}/pin/';" value="click here" width="40px" >led</button>
        </div>
        <div>
            <button class="hello" onclick="window.location='http://${ipaddr}:${port}/helloMom';" value="click here" width="40px" >hello mom</button> 
        </div>
        <div>
            <button class="hello" onclick="window.location='http://${ipaddr}:${port}/helloDad';" value="click here">hello Dad</button>
        </div>
    </body>
    </html>
    `)
});

module.exports = router
