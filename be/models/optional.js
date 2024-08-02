const mongoose = require('mongoose')
const optionalSchema = new mongoose.Schema({
       name:{type:String, required:true},
},{
    timestamps:true , versionKey:false
})

const OptionalModel = mongoose.model('optionals', optionalSchema)

module.exports = OptionalModel