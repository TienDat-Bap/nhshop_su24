
const mongoose = require('mongoose')
const CategorySchema = new mongoose.Schema({
       name:{type:String, required:true},
       slug:{type:String}
},{
    timestamps:true , versionKey:false
})

const CategoryModel = mongoose.model('categories', CategorySchema)

module.exports = CategoryModel