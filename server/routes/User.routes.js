const router = require("express").Router();
const userController = require("../controllers/user.js");
const orderController = require("../controllers/order.js");

router.post("/create", userController.createUser);
router.get("/dashboard", userController.dashboard);
router.put("/update", userController.updateUser);
router.delete("/delete", userController.deleteUser);
router.post("/login", userController.userLogin);
router.get("/logout", userController.logout);
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
// router.delete("/order/delete", orderController.deleteOrder);
// router.put("/order/update", orderController.updatedOrder);

module.exports = router;
