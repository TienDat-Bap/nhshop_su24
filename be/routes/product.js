
const express = require('express')
const { createProduct, getAllProduct, deleteProduct, updateProduct, getByIdProduct } = require('../controllers/product')
const router = express.Router()

router.post('/',createProduct)
router.get('/',getAllProduct)
router.get('/:productId',getByIdProduct)
router.delete('/:productId',deleteProduct)
router.put('/:productId',updateProduct)


module.exports = router