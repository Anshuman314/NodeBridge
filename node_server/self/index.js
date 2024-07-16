const fs = require ('fs')
const os = require('os')

const in_path = __dirname + '/number.txt'
const out_path= __dirname + '/output.txt'

fs.readFile(in_path, (err,data) => {
    if(err) throw err

    let nums = data.toString().split(os.EOL);
    let sorted = nums.sort((a,b) =>a-b)
    
    fs.writeFile(out_path, sorted.join(os.EOL), (err) => {
        if(err) throw err
    })
})

// app.get('/calc/add', (req,res) => {
//     let q1= parseInt(req.query.q1)
//     let q2 = parseInt(req.query.q2)
//     let result = q1 + q2
//     res.send('Answer = ' + result)
// })

// fs.writeFile()