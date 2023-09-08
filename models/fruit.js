const mongoose = require("mongoose")

const fruitSchema =  new mongoose.Schema({
    //requires a name field. can place other values 
    name: { type: String, required: true },
    color: { type:String, required: true},
    img: String,
    readyToEat: Boolean
})

//creating model used to use our CRUD functionalty
//models should be caps
const Fruit = mongoose.model("Fruit", fruitSchema)

//need to export to use in other files
module.exports = Fruit