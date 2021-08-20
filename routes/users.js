const express = require('express')
const router = express.Router()
const passport = require('passport')

const catchAsync = require('../utils/catchAsync')
const { validateUser, checkForUser } = require('../middleware.js')
const users = require('../controllers/users')

router.route('/register')
    .get(users.renderRegister)
    .post(validateUser, catchAsync(users.register))

router.post('/registerguest', checkForUser, catchAsync(users.registerGuest))

router.route('/login')
    .get(users.renderLogin)
    .post(passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), (users.login))

router.get('/logout', users.logout)

router.delete('/deleteaccount', catchAsync(users.destroyAccount))

module.exports = router;