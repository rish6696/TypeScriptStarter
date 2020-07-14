import express, { Request, Response, urlencoded } from 'express'
import {router} from './routes/index'
import mongoose from 'mongoose'
import  { dbUrl,env }   from './config'
import { production,development } from './constants'



const app = express();
const PORT = 8000



app.use(urlencoded({extended:true}))
app.use(express.json())

app.use('/api',router)

mongoose.connect(dbUrl as string ,{useNewUrlParser:true,useUnifiedTopology:true},()=>{
    if(env===development) console.log("MongoDb connected successfully")
})

app.listen(PORT,():void=>{
    if(env===development) console.log("listening' on the port",PORT)
})