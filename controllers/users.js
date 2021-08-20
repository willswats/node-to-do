const User = require('../models/user')
const ToDo = require('../models/todo');

module.exports.renderRegister = (req, res) => {
    res.render('users/register')
}

module.exports.register = async (req, res) => {
    try {
        const { email, username, password } = req.body
        const user = new User({ email, username })
        const registeredUser = await User.register(user, password)
        req.login(registeredUser, err => {
            if (err) return next(err)
            req.flash('success', `Successfully registered user ${registeredUser.username}! `)
            res.redirect('/todo')
        })
    } catch (e) {
        req.flash('error', e.message)
        res.redirect('/register')
    }
}

module.exports.registerGuest = async (req, res) => {
    try {
        const rand = Math.floor(Math.random() * 1000000000000000000000)
        const email = `${rand}@${rand}`
        const username = `${rand}`
        const password = `${rand}`
        const user = new User({ email, username })
        const registeredUser = await User.register(user, password)
        req.login(registeredUser, err => {
            if (err) return next(err)
            req.flash('success', `Successfully logged in guest user ${registeredUser.username}! `)
            req.flash('error', 'This is a guest account, to save your To Do List please register your own account.')
            res.redirect('/todo')
        })
    }
    catch (e) {
        req.flash('error', e.message)
        res.redirect('/')
    }
}

module.exports.renderLogin = (req, res) => {
    res.render('users/login')
}

module.exports.login = (req, res) => {
    req.flash('success', `Welcome back user ${req.user.username}!`)
    res.redirect('/todo')
}

module.exports.logout = (req, res) => {
    req.logout()
    req.flash('success', `Successfully logged out.`)
    res.redirect('/')
}

module.exports.destroyAccount = async (req, res) => {
    try {
        const { id } = req.user
        await ToDo.deleteMany({ author: id })
        await User.findByIdAndDelete(id)
        req.flash('success', `Successfully deleted account.`)
        res.redirect('/')
    }
    catch (e) {
        req.flash('error', e.message)
        res.redirect('/')
    }
}