const passport = require('passport');
const userModels = require('../models/user.models');
const mongoose = require('mongoose');
const jsonwebtoken = require('jsonwebtoken');
const app = require('../index')

function generateToken(user) {
    if (user) {
        let signedToken = jsonwebtoken.sign(
            {
                data: user._id,
                exp: new Date().setDate(new Date().getDate() + 1)
            },
            "1234567890"
        );
       
        return signedToken;
    }
    return new Error('userException: user not found');
}

function verifyJwt(req, res, next) {
    const token = req.session.token

    if (token) {
        jsonwebtoken.verify(token, '1234567890', (error, payload) => {
            if (payload) {
                console.log(payload)
                userModels.Account
                    .findById(payload.data).then(user => {
                        if (user) {
                            console.log('sync')
                            return next();
                        } else {

                            return res.status(401).json({
                                error: error,
                                message: "No User account found."
                            })
                        }
                    })
            } else {
                return res.status(401).json({
                    error: error,
                    message: "Cannot verify API token."
                });
            }
        })
    } else {
        return res.status(401).json({
            error: true,
            message: "Provide Token"
        });
    }
}


function createAdmin(req, res, next) {
    const newAdmin = {
        username: req.body.username,
        email: req.body.email,
        role: 'admin'
    }
    const Admin = new userModels.Admin(newAdmin);
    userModels.Admin.register(Admin, req.body.password, (err, user) => {
        if (err) {
            return res.status(500).json({
                status: "fail",
                message: " user not created try again",
                error: err
            })
        }
        if (!user) {
            return res.status(500).json({
                status: "fail",
                message: " user not created  :try again",
            })
        }
        req.login(user, function (err) {
            if (err)
                { return res.status(500).json({
                status: "fail",
                message: "failed to create session",
                error: err
            })};

            // Successfully authenticated and session created
            const jwt = generateToken(req.user);
            req.session.token = jwt;
            console.log('success')
            return res.status(201).json({
                status: "success",
                message: " user created",
                user: req.user,
                tkn: req.session.token
            })
        });

    })
}

function adminDashboard(req, res, next) {
    return res.status(200).json({
        status: 'success',
        message: '',
        user: req.user,
        redirect: ''
    })
}
function adminLogin(req, res, next) {
    passport.authenticate('local', function (err, user) {
        if (!user) return res.status(403).json({
            status: "fail",
            message: "incorrect username or password "
        })
        if (err) return res.status(500).json({
            status: "fail",
            message: "failed to authenticate user",
            error: err
        })
        req.login(user, function (err) {
            if (err) return res.status(500).json({
                status: "fail",
                message: "failed to create session",
                error: err
            });
            // Successfully authenticated and session created
            res.locals.currentUser = req.user
            req.session.token = generateToken(req.user);
            // console.log(req.session.token, req.user,'USER')
            if (req.user.role === 'admin') {
                
                return res.status(200).json({
                    status: 'success',
                    message: 'authentication success',
                    redirect: '/admin/panel'
                })
                // return next()
            }
            console.log('success')
            // req.session.token = generateToken(req.user.id);
            return res.status(200).json({
                status: 'success',
                message: 'redirect to dashboard',
                redirect: '/user/panel'
            })
            // return next();
        });
    })(req, res, next)
}

function deleteAdmin(req, res, next) {
    const uId = mongoose.Types.ObjectId.createFromHexString(req.query.id);
    userModels.findByIdAndDelete(uId)
        .then((deletedAccount) => {
            res.status(200).json({
                status: 'success',
                message: `Account: "${deletedAccount.username}" deleted successfully`,
                redirect: '/signUp'
            })
            return next()
        }).catch((err) => {
            return res.status(500).json({
                status: 'fail',
                message: `could not delete account`,
                error: err
            })
        });
}

function logout(req, res, next) {
    if (!req.isAuthenticated()) {
        console.log('not authenticated')
        return res.status(500).json({
            status: 'fail',
            message: 'Session unset'
        })
    }
    req.logout((err) => {
        console.log('req logout')
        if (err) {
            console.log('logout err')
            return res.status(500).json({
                status: 'fail',
                message: 'Error logging out user',
                error: err,
            })
        }
        console.log('success logout')
        return res.status(200).json({
            status: 'success',
            message: 'successfully logged out',
            redirect: '/login'
        })
        // return next()
    })
}

function test(req, res, next) {

    console.log("user", req.user, req.isAuthenticated(), res.locals.currentUser);
    res.status(200).json({ user: req.user, logged: req.isAuthenticated() })
    return next()
}

module.exports = { createAdmin, adminLogin, test, deleteAdmin, logout, adminDashboard, verifyJwt }