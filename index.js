const express = require('express')
const superagent = require('superagent')
const app = express()

const config = require('./config')

app.use(express.json())

app.post('/telegram',async(request, response)=>{
    console.log(request.body)

    const chat_id = request.body.message.chat.id
    const text = `hola ${request.body.message.chat.first_name} ${request.body.message.chat.last_name}`

    await superagent.get('https://api.telegram.org/bot5670324068:AAEoYQjOYwK3_3CB76eurHamhhgtQQthd8I/sendMessage')
        .query({
            chat_id: chat_id,
            text: text
        })

    response.send('ok')
})

app.listen(config.port,() => {
    console.log('server run')
})
