const order = require("../models/order.models");
const userModel = require("../models/user.models");

function getOrder(req, res, next) {
  order
    .find({})
    .then((orders) => {
      return res.status(200).json({
        orders,
        status: "success",
      });
    })
    .catch((error) => {
      return res.status(500).json({
        status: "Failed",
        error,
        message: "Failed to get orders",
      });
    });
}

function createOrder(req, res, next) {
  const newOrder = {
    productName: req.body.productName,
    price: req.body.price,
    buyer: req.user,
  };

  order
    .create(newOrder)
    .then((orderInfo) => {
      userModel.User.findByIdAndUpdate(
        req.user.id,
        { $addToSet: { order: orderInfo } },
        { new: true }
      )
        .then((updatedUser) => {
          req.user = updatedUser;
          return res.status(200).json({
            orderInfo,
            updatedUser,
            status: "success",
            message: " order created",
          });
        })
        .catch((error) => {
          return res.status(500).json({
            status: "Failed",
            error,
            message: "Failed to update Account",
          });
        });
    })
    .catch((error) => {
      return res.json({
        status: "failed",
        error,
        message: "Failed to create order",
      });
    });
}

function updatedOrder(req, res, next) {}

function deleteOrder(req, res) {
  const uId = mongoose.Types.ObjectId.createFromHexString(req.query.id);
  order
    .findByIdAndDelete(uId)
    .then((deletedOrder) => {
      return res.status(200).json({
        status: "success",
        message: `Order for "${deletedOrder.productName}" deleted successfully`,
        redirect: "/signUp",
      });
    })
    .catch((err) => {
      return res.status(500).json({
        status: "fail",
        message: `could not delete account`,
        error: err,
      });
    });
}

module.exports = { createOrder, deleteOrder, getOrder };
