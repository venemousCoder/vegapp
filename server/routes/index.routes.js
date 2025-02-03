const Routes = require("express").Router()
const userRouter = require("./User.routes");
const adminRouter = require("./Admin.routes");
<<<<<<< HEAD
productsRouter = require("./products.routes")
=======
const auth = require('../controllers/admin');

Routes.post('/auth', auth.adminLogin)
>>>>>>> 14275fc903f97a278001bb5cee6e03673d5f28ba
Routes.use('/user', userRouter);
Routes.use('/admin', adminRouter);
Routes.use('/')
module.exports = Routes
