const ProductModel = require("../models/product")


const createProduct = async(req,res) => {
    try {
       const product = await ProductModel.create(req.body)
            res.status(200).json(product)
        
    } catch (error) {
        res.status(500).json(error)
    }
}

const getAllProduct = async(req,res) => {
    try {
       const products = await ProductModel.find().populate('category')
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json(error)
    }
}
const getByIdProduct = async(req,res) => {
    try {
       const product = await ProductModel.findById(req.params.productId).populate('category')
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json(error)
    }
}

const deleteProduct = async(req,res) => {
    try {
       const product = await ProductModel.findByIdAndDelete(req.params.productId)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json(error)
    }
}
const updateProduct = async(req,res) => {
    try {
       const product = await ProductModel.findByIdAndUpdate(req.params.productId,req.body,{new:true})
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {
    createProduct,
    getAllProduct,
    deleteProduct,
    updateProduct,
    getByIdProduct
}