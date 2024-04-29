const express = require('express')
const app = express()

const port = 3000


app.get("/", (req,res)=>{
    console.log("main page")
    res.send("hello from test server")
})

app.listen(port, (err)=>{
    if(err) console.log("error")
    console.log("server works")
})