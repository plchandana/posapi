const express = require("express")
const route = express.Router()

route.get("/", (req, res)=>{
    res.send("POS Express Root")
})

module.exports = route;