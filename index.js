const express = require('express')
const app = express()

const config = require('./config')

app.post('/telegram',(request, response)=>{
    console.log(request.body)
    response.send('ok')
})

app.listen(config.port,() => {
    console.log('server run')
})