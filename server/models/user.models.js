const mongoose = require('mongoose');
const PassportLocalMongoose = require('passport-local-mongoose');
const AccountScheme = mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: [true, "Email already exist"]
        },
        username: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            required: true,
            enum: ['user', 'admin', 'moderator'],
            default: 'user'
        },

    },
    {
        timestamps: true,
    }
);

AccountScheme.plugin(PassportLocalMongoose, {
    usernameField: 'email'
})

const Account = mongoose.model('Account', AccountScheme);
const Admin = Account.discriminator('Admin', {});
const User = Account.discriminator('User', {});
const Moderator = Account.discriminator('Moderator', {});

// const Admin = mongoose.model('Admin')

module.exports = {Admin, Account, User};
