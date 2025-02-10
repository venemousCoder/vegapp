const router = require('express').Router();
const productControllers = require('../controllers/product');
const orderController  = require('../controllers/order');
const adminControllers = require('../controllers/admin')
const jwtAuth = require('../Utils/jwt')
const multer = require('../Utils/multer');

router.post('/cSUAD', adminControllers.createAdmin);
//protected routes
router.use(jwtAuth.adminVerifyJwt);
<<<<<<< HEAD
router.get('/orders', orderController.getOrder)
router.get('/dashboard', adminControllers.adminDashboard)
router.get('/logout', adminControllers.logout)
router.get('/delete', adminControllers.deleteAdmin)
router.post('/uploadProduct', multer.single('image'), productControllers.createProduct);
router.post('/updateProduct', productControllers.updateProduct);

=======

router.get('/orders', orderController.getOrder);

router.get('/dashboard', adminControllers.adminDashboard);

router.get('/logout', adminControllers.logout);

router.get('/delete', adminControllers.deleteAdmin);

router.post('/uploadProduct', multer.single('image'), productControllers.createProduct);

router.post('/updateProduct', productControllers.updateProduct);

router.post("/updateOrder", orderController.updatedOrder)


>>>>>>> 0bcf841 (Mark subprojects as dirty to indicate uncommitted changes)


module.exports = router;