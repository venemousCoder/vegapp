const Routes = require("express").Router()
const userRouter = require("./user.routes");
const adminRouter = require("./Admin.routes");
productsRouter = require("./products.routes")
Routes.use('/user', userRouter);
Routes.use('/admin', adminRouter);
Routes.use('/')
module.exports = Routes
