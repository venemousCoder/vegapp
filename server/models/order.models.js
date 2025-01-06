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
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  { timestamp: true }
);

const order = mongoose.model("order", scheme);

module.exports = order;
