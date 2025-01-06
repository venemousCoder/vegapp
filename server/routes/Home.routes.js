const router = require('express').Router()
const auth = require('../controllers/user');

router.post('/auth', auth.userLogin)

module.exports = router