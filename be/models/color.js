
const mongoose = require('mongoose')
const colorSchema = new mongoose.Schema({
       name:{type:String, required:true},
},{
    timestamps:true , versionKey:false
})

const ColorModel = mongoose.model('colors', colorSchema)

module.exports = ColorModel