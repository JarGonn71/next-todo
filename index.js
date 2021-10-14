const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json({extended: true}))
app.use('/api/notice', require('./routes/pots.routes'))


async function start(){
   try {
       await mongoose.connect('mongodb+srv://qwerty:qwerty123@cluster0.unpap.mongodb.net/newproject?retryWrites=true&w=majority')
       app.listen(PORT, ()=>{
           console.log('listening on port:' + PORT)
       })
   } catch (error) {
       console.log(error)
   }
}

start()