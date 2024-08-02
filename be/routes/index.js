const ProductRouter = require('./product')
const CategoryRouter = require('./category')
const routes = (app)=>{
    app.use("/api/products",ProductRouter)
    app.use("/api/categories",CategoryRouter)
}

module.exports = routes