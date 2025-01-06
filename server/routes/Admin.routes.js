const router = require('express').Router();
const productControllers = require('../controllers/product');
// const { logout } = require('../controllers/user');
const adminControllers = require('../controllers/admin')
const jwtAuth = require('../Utils/jwt')
const multer = require('../Utils/multer');

router.post('/cSUAD', adminControllers.createAdmin);
//protected routes
router.use(adminControllers.verifyJwt);
router.get('/dashboard', adminControllers.adminDashboard)
router.get('/logout', adminControllers.logout)
router.get('/delete', adminControllers.deleteAdmin)
router.post('/uploadProduct', multer.single('image'), productControllers.createProduct);
router.post('/updateProduct', productControllers.updateProduct);



module.exports = router;