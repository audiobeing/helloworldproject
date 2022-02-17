
const express = require('express'); 
const path = require('path');

const app = express(); 
const port = process.env.PORT || 3000;  /// use enviromental (heroku, etc) port || 3000


app.get("/", (req, res)=>{
    // res.send("hello world"); 
    res.sendFile(path.join(__dirname, "index.html"))
})

app.listen(port, ()=>{
    console.log("simple example of app listening on port: "+port)
})

