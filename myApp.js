
let express = require('express');

let app = express();
require('dotenv').config();
let mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
app.get("/",(res)=>{
    res.sendFile("hiiiii");
});



app.get("/json",function(req,res){
    console.log("hiii");
    console.log(process.env.MESSAGE_STYLE, "<=message style");
    if(process.env.MESSAGE_STYLE === "uppercase"){
        res.json(
            {"message":"HELLO JSON"}
        )
    }
    else{
        res.json({
            "message":"Hello json"
        })
    }
})
































 module.exports = app;
