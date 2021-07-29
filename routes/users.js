const express = require('express')
const router = express.Router()

router.get('/register', (req, res) => {
    res.render('users/register')
})

router.post('/register', (req, res) => {
    res.redirect('/todo')
})

router.get('/login', (req, res) => {
    res.render('users/login')
})

router.post('/login', (req, res) => {
    res.redirect('/todo')

})

router.get('/logout', (req, res) => {
    res.redirect('/todo')
})

module.exports = router;