const express = require("express")

const app = express()

require('dotenv').config({path:'.env'})

const port = process.env.port

app.listen(port, ()=>{console.log('Connect with the port', port);} )

var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://electiva1:electiva1@electiva1.6jf1b5m.mongodb.net/test', {
    }).then(db => console.log('conexion exitosa'))
    .catch(err => console.log('error: ', err))


    