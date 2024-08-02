
const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    text: { type: String }
}, { timestamps: true, versionKey: false })
const attributeSchema = new mongoose.Schema({
    option: {type:String},
    color:{type:String},
    image:{type:String},
    price:{type:Number},
    instock:{type:Number}
})
const ProductSchema = new mongoose.Schema({
    name: { type: String },
    avatar: { type: String },
    discount: {
        type: { type: String, enum: ['percent', 'money'] },
        value: { type: Number }
    },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'categories' },
    description: { type: String },
    rating: { type: Number, default: 0 },
    attributes:[
        
    ],
    purchases:{type:Number, default:0},
    comment: [
        commentSchema
    ],
    active:{type:Boolean, default:false}
}, {
    timestamps: true, versionKey: false
})

const ProductModel = mongoose.model('products', ProductSchema)

module.exports = ProductModel
