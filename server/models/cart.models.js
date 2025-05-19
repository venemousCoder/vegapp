const mongoose = require('mongoose');

const CartScheme = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Products'
        },


    },
    {
        timestamps: true,
    }
);

 module.exports = mongoose.model('Cart', CartScheme);
