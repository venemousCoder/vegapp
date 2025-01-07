const mongoose = require("mongoose");

const scheme = mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    buyer: {
      type: {},
      ref: 'User',
      required: true
    }
  },
  { timestamp: true }
);

const order = mongoose.model("order", scheme);

module.exports = order;
