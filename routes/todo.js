const express = require('express')
const router = express.Router()

const ToDo = require('../models/todo');
const catchAsync = require('../utils/catchAsync');
const { isLoggedIn } = require('../middleware.js')

router.get('/', isLoggedIn, catchAsync(async (req, res) => {
    const toDos = await ToDo.find({}).populate('author')
    await toDos.sort((a, b) => (a.priority) - (b.priority));
    res.render('todo/index', { toDos })
}))

router.post('/', isLoggedIn, catchAsync(async (req, res) => {
    const newToDo = new ToDo(req.body)
    newToDo.author = req.user._id
    await newToDo.save();
    res.redirect('/todo')
}))

router.get('/:id', isLoggedIn, catchAsync(async (req, res) => {
    const { id } = req.params;
    const toDo = await ToDo.findById(id);
    res.render('todo/edit', { toDo })
}))

router.put('/:id', isLoggedIn, catchAsync(async (req, res) => {
    const { id } = req.params;
    await ToDo.findByIdAndUpdate(id, req.body, { runValidators: true });
    if (req.body.complete) {
        const toDo = await ToDo.findById(id);
        if (toDo.complete === false) {
            await toDo.updateOne({ complete: true })
        } else {
            await toDo.updateOne({ complete: false })
        }
    }
    res.redirect(`/todo`)
}))

router.delete('/', isLoggedIn, catchAsync(async (req, res) => {
    await ToDo.deleteMany({})
    res.redirect('/todo')
}))

router.delete('/:id', isLoggedIn, catchAsync(async (req, res) => {
    const { id } = req.params;
    await ToDo.findByIdAndDelete(id)
    res.redirect('/todo')
}))

module.exports = router;