const router = require("express").Router();
const userController = require("../controllers/user.js");
const orderController = require("../controllers/order.js");
const productController = require("../controllers/product.js");
const cartController = require("../controllers/cart.js");
const jwtAuth = require("../Utils/jwt");

//protected routes
router.use(jwtAuth.verifyJwt);

router.get("/dashboard", userController.dashboard);
router.put("/update", userController.updateUser);
router.delete("/delete", userController.deleteUser);
router.get("/logout", userController.logout);
router.get("/test", userController.test);

// *********************** */
//
// PRODUCT ROUTES
//
// *********************** */

router.get("/products", productController.getProducts);
router.get("/products/:id", productController.getProductById);
router.get("/products", productController.searchProducts);
//********************** */
//
// ORDER ROUTES
//
//********************** */

router.get("/orders", orderController.getOrders);
router.get("/orders/:id", orderController.getOrderById);
router.post("/orders/create", orderController.createOrder);
router.put("/orders/:id/pay", orderController.payOrder);
router.put("/orders/:id/delivered", orderController.deliveredOrder);
router.get("/orders/:id/cancel", orderController.cancelOrder);

// **************** */
//
// CART ROUTES
//
// **************** */

router.get("/cart", cartController.getCart);
router.post("/cart/:productId/add", cartController.addToCart);
router.put("/cart/update", cartController.updateCart);
router.delete("/cart/:productId/remove", cartController.removeFromCart);

module.exports = router;
