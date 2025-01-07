const router = require("express").Router()
const userController = require("../controllers/user.js");
const orderController = require('../controllers/order.js')


router.post('/create', userController.createUser);
router.post('/auth', userController.userLogin);
router.get('/delete', userController.deleteUser);
router.get('/logout', userController.logout);
router.post('/order', orderController.createOrder)
router.get('/test', userController.test);


module.exports = router
