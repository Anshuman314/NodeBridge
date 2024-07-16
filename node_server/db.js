const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/meanDB', (err) => {
    if(err) throw err;

    console.log('DB connection eslablished')
})

module.exports = mongoose;