const router = require("express").Router();
const userController = require("../controllers/user.js");
const orderController = require("../controllers/order.js");
const productController = require("../controllers/product.js")
const cartController = require("../controllers/cart.js")

router.get("/dashboard", userController.dashboard);
router.put("/update", userController.updateUser);
router.delete("/delete", userController.deleteUser);
router.get("/logout", userController.logout);
router.get("/products", productController.getProducts);
router.get("/products/:id", productController.getProductById);
router.get("/test", userController.test);

//********************** */
//
// ORDER ROUTES
//
//********************** */

router.get("/order", orderController.getOrders);
router.get("/order/:id", orderController.getOrderById);
router.post("/order/create", orderController.createOrder);
router.put("/order/:id/pay", orderController.payOrder)


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
