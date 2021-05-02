const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config();

const app = express();

app.use(bodyParser.urlencoded({extended: true}))

app.use(bodyParser.json())

const PORT = process.env.PORT

app.get('/',(req,res)=>{
    res.send('Hello World!')
})

const sender = require('./sender')


app.post('/whatsapp', async(req,res)=>{
    
    
    res.status(200)

    try{
        await sender.sendMessage(req.body)
    }catch(err){
        console.log(err)
    }

})

app.listen(PORT, () =>{
    console.log(`Server is up and runnit at ${PORT}`)
})
