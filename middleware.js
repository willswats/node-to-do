const ToDo = require('./models/todo');

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
