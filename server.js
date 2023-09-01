const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000
const fruits = require('./models/fruits')

//Index Route
app.get("/fruits", (req, res) =>{
    res.send(fruits)
})

//Show route
app.get('/fruits/:id', (req, res) => {
    res.send(fruits[req.params.id]);
})

app.listen(PORT, ()=>{
    console.log(`Juicy Fruit on Port ${PORT}`)
})