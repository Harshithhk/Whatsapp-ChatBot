const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN

const client = require('twilio')(accountSid,authToken,{
    lazyLoading: true
})

const sendMessage = async (reqBody) =>{

    

    let reply = getReply(reqBody)

    console.log(reply);

    try{
        await client.messages.create({
            to: reqBody.From,
            body: reply,
            from: 'whatsapp:+14155238886'
        })
    }catch(err){
        console.log(err)
    }
}

const getReply = (reqBody)=>{
    let message = reqBody.Body
    let senderID = reqBody.From
    let profileName = reqBody.ProfileName
    let waId = reqBody.WaId

    if(message.toLowerCase().includes('my name')){
        return `Your name is ${profileName}`
    }
    else if(message.toLowerCase().includes('my') && message.toLowerCase().includes('number')){
        return `Your whatsaap number is ${waId}`
    }
    else if(message.toLowerCase().includes('say')){
        return message.slice(4)
    }
    
    else{
        return 'PogChamp'
    }
}



module.exports = {
    sendMessage
}