import express from'express'
import cors from'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import authRouter from '../routes/auth.js'
dotenv.config()
const app= express()
app.use(express.json())
app.use(cors())


mongoose.connect(process.env.MONGO).then(()=>{
console.log('Database is connected')
app.listen(3000,()=>{
  console.log('serveris running succesfully')
})
})
.catch((error)=>{
  console.log(error)
})

app.use('/api/auth',authRouter)




