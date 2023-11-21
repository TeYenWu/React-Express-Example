const express = require('express')
const app = express()


app.get("/api", (req, res)=> {
    res.json({"users": ["userone", "usertwo", "userthree"]})
})

app.listen(8080, ()=>{console.log("Server started on port 8080")})