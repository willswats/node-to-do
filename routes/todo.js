const express = require('express')
const router = express.Router()

const ToDo = require('../models/todo');
const catchAsync = require('../utils/catchAsync');
const { isLoggedIn, isAuthor } = require('../middleware.js')

router.get('/', isLoggedIn, catchAsync(async (req, res) => {
    const toDos = await ToDo.find({ author: req.user._id })
    await toDos.sort((a, b) => (a.priority) - (b.priority));
    res.render('todo/index', { toDos })
}))

router.post('/', isLoggedIn, catchAsync(async (req, res) => {
    const newToDo = new ToDo(req.body)
    newToDo.author = req.user._id
    await newToDo.save();
    req.flash('success', 'Added new task.')
    res.redirect('/todo')
}))

router.get('/:id', isLoggedIn, isAuthor, catchAsync(async (req, res) => {
    const { id } = req.params;
    const toDo = await ToDo.findById(id);
    res.render('todo/edit', { toDo })
}))

router.put('/:id', isLoggedIn, isAuthor, catchAsync(async (req, res) => {
    const { id } = req.params;
    await ToDo.findByIdAndUpdate(id, req.body, { runValidators: true });
    req.flash('success', 'Updated task.')
    res.redirect(`/todo`)
}))

router.put('/:id/complete', isLoggedIn, isAuthor, catchAsync(async (req, res) => {
    const { id } = req.params;
    const toDo = await ToDo.findById(id);
    if (toDo.complete === false) {
        await toDo.updateOne({ complete: true })
    } else {
        await toDo.updateOne({ complete: false })
    }
    res.redirect(`/todo`)
}))

router.delete('/', isLoggedIn, catchAsync(async (req, res) => {
    await ToDo.deleteMany({ author: req.user._id })
    req.flash('success', 'Deleted all tasks.')
    res.redirect('/todo')
}))

router.delete('/:id', isLoggedIn, isAuthor, catchAsync(async (req, res) => {
    const { id } = req.params;
    await ToDo.findByIdAndDelete(id)
    req.flash('success', 'Deleted task.')
    res.redirect('/todo')
}))

module.exports = router;