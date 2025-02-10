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
<<<<<<< HEAD
=======
    },
    delivered: {
      type: Boolean,
      required: true,
      default: false
>>>>>>> 0bcf841 (Mark subprojects as dirty to indicate uncommitted changes)
    }
  },
  { timestamp: true }
);

const order = mongoose.model("order", scheme);

module.exports = order;
