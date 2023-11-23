const express = require("express")
const app = express()
const cors = require("cors")
const fs = require("fs")
app.use(express.json())
app.use(cors())


app.get("/",(req,res)=>{
    const data = JSON.parse(fs.readFileSync("./data.json","utf-8"))
    res.send(data)
})

app.post("/add",(req,res)=>{
    const data = JSON.parse(fs.readFileSync("./data.json","utf-8"))
    const newUser = req.body
    console.log(newUser)
    newUser.id = data.users.length + 1;
    data.users.push(newUser)
    fs.writeFileSync("./data.json",JSON.stringify(data,null,2))
    res.send("User Registered")
})

// app.post("/login",(req,res)=>{
//     const {email,password} = req.body

//     const data = JSON.parse(fs.readFileSync("./data.json","utf-8"))
// })

app.listen(8000,()=>{
    console.log("Server  runnung")
})