const order = require("../models/order.models");

function createOrder(req, res, next) {

    const newOrder = {
      productName: req.body.productName,
      price: req.body.price,
      buyer: req.user,
    };

    order.create(newOrder).then((orderInfo) => {
      return res.status(200).json({
        orderInfo,
        status: "success",
        message: " order created",
      });
    }).catch((error)=>{
        console.log(error);

        return res.json({
            status: 'failed',
            error
          })
    })

}

module.exports = { createOrder };
