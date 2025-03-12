const mongoose=require("mongoose")
const Portfolio=mongoose.model("portfolio",new mongoose.Schema({
    name:String,
    desc:String,
    image:String
}) )
module.exports={Portfolio}