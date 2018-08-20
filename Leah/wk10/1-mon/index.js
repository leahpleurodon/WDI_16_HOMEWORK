const express = require("express")
const axios = require("axios")
const app = express()
const PORT = 2345
const insults = require("./insults")
const _ = require("lodash")

app.set("view engine", "ejs")

app.use(express.static("public"))

app.get('/', (req, res)=>{
    res.render("index")
})

app.get('/insult', (req, res)=>{
    name = req.query.name
    debugger
    insult = _.sample(insults.list())
    color = _.sample(insults.colours())
    res.render("insult", {name: name, insult: insult, color: color})
})



app.listen(PORT,()=>{
    console.log(`Listening on ${PORT}`);
})