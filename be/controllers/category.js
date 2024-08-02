const CategoryModel = require("../models/category")


const createCategory = async(req,res) => {
    try {
        const checkCategory = await CategoryModel.find({name:req.body.name})
        if(checkCategory.length=0){
            res.status(400).json({
                message: 'Category already exist!'
            })
        }
        else{
            const category = await CategoryModel.create(req.body)
            res.status(200).json(category)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

const getAllCategory = async(req,res) => {
    try {
        const categories = await CategoryModel.find()
        res.status(200).json(categories)
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {
    createCategory,
    getAllCategory
}