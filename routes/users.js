const express = require('express')
const router = express.Router()
const passport = require('passport')
const User = require('../models/user')
const catchAsync = require('../utils/catchAsync')


router.get('/register', catchAsync(async (req, res) => {
    res.render('users/register')
}))

router.post('/register', async (req, res) => {
    try {
        const { email, username, password } = req.body
        const user = new User({ email, username })
        const registeredUser = await User.register(user, password)
        req.login(registeredUser, err => {
            if (err) return next(err)
            req.flash('success', `Successfully logged in ${registeredUser.username}! `)
            res.redirect('/todo')
        })
    } catch (e) {
        req.flash('error', e.message)
        res.redirect('register')
    }
})

router.get('/login', (req, res) => {
    res.render('users/login')
})

router.post('/login', (req, res) => {
    passport.authenticate('local', () => {
        res.redirect('/todo')
    })
})

router.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/')
})

module.exports = router;