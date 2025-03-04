import express from "express"
import { configDotenv } from "dotenv"
import connectdb from "./databases/user.db.js"

configDotenv()
const app=express()

app.listen(process.env.PORT_NUMBER,()=>{
    connectdb()
    console.log(`your port is connected on ${process.env.PORT_NUMBER}`)
})