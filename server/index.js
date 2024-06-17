//import necessary package
import express from 'express'
import cors from 'cors'
import jwt from 'jsonwebtoken'
import cookieParser from 'cookie-parser'

//create an express app
const app = express()

//Enable CORS with specific origin and credentials
app.use(cors({
    origin:[""],
    credentials: true
}))

//parse income JSON request
app.use(express.json())

//parse cookies
app.use(cookieParser())

