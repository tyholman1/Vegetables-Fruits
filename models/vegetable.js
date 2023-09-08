const mongoose = require("mongoose")

const vegetableSchema =  new mongoose.Schema({
    //requires a name field. can place other values 
    name: { type: String, required: true },
    color: { type:String, required: true},
    puns: String,
    img: String,
    readyToEat: Boolean
},
{
    timestamps: true
})

//creating model used to use our CRUD functionalty
//models should be caps
const Vegetable = mongoose.model("Vegetable", vegetableSchema)

//need to export to use in other files
module.exports = Vegetable