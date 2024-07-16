const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const mongoose = require('./db.js')
const routes = require('./routes/route')

const app = express()

app.use(cors())

// app.get('/', (req,res) => {
//     res.send("welcome to hello world")
// })

// app.use(express.static(__dirname + '/HTML'))

app.use(bodyparser.json())

app.listen(3032, (err) => {
    if(err) throw err 

    console.log('server started at http://localhost:3032')
})

app.use('/employees', routes)