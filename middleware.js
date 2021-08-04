const ToDo = require('./models/todo');
const { userSchema, toDoSchema } = require('./schemas.js')

module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.session.returnTo = req.originalUrl
        req.flash('error', 'You must be signed in.')
        return res.redirect('/login')
    }
    next();
}

module.exports.isAuthor = async (req, res, next) => {
    const { id } = req.params
    const toDo = await ToDo.findById(id)
    if (!toDo.author.equals(req.user._id)) {
        req.flash('error', 'You do not have permission to do that!')
        return res.redirect(`/todo`)
    }
    next();
}

module.exports.validateUser = (req, res, next) => {
    const { error } = userSchema.validate(req.body)
    if (error) {
        const msg = error.details.map(el => el.message).join(',')
        req.flash('error', msg)
        res.redirect('/register')
    } else {
        next();
    }
}

module.exports.validateToDo = (req, res, next) => {
    const { error } = toDoSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(',')
        req.flash('error', msg)
        res.redirect('/todo')
    } else {
        next();
    }
}