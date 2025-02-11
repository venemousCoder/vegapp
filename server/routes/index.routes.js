const Routes = require("express").Router()
const userRouter = require("./User.routes");
const adminRouter = require("./Admin.routes");

productsRouter = require("./products.routes")
const auth = require('../controllers/admin');

Routes.post('/auth', auth.adminLogin)
Routes.use('/user', userRouter);
Routes.use('/admin', adminRouter);
Routes.use('/')
module.exports = Routes
