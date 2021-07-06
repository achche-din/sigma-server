const express = require('express')
const app = express()

const port = 5000

app.get('/',(req,res)=>{
    console.log('In home')
    res.send('In home')
})

app.listen(port,()=>{
    console.log('server started at port '+port)
})