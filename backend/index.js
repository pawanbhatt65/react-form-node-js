const express=require('express')
const cors=require('cors')
const jwt=require('jsonwebtoken')
require('./db/config')
const User=require('./db/users')

const jwtKey="react-form"
const app=express()

app.use(express.json())
app.use(cors())


app.post('/contact-me', async (req, res)=>{
    const user=new User(req.body)
    const result=await user.save()
    res.send(result)
})

app.listen(3000)