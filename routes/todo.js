const express = require('express')
const router = express.Router()

const ToDo = require('../models/todo');

router.get('/', async (req, res) => {
    const toDos = await ToDo.find({})
    await toDos.sort((a, b) => (a.priority) - (b.priority));
    res.render('todo/index', { toDos })
})

router.post('/', async (req, res) => {
    const newToDo = new ToDo(req.body)
    await newToDo.save();
    res.redirect('/todo')
})

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const toDo = await ToDo.findById(id);
    res.render('todo/edit', { toDo })
})

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    await ToDo.findByIdAndUpdate(id, req.body, { runValidators: true });
    res.redirect(`/todo`)
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await ToDo.findByIdAndDelete(id)
    res.redirect('/todo')
})

module.exports = router;