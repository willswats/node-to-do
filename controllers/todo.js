const ToDo = require('../models/todo');

module.exports.index = async (req, res) => {
    const toDos = await ToDo.find({ author: req.user._id })
    await toDos.sort((a, b) => (a.priority) - (b.priority));
    res.render('todo/index', { toDos })
}

module.exports.create = async (req, res) => {
    const newToDo = new ToDo(req.body)
    newToDo.author = req.user._id
    await newToDo.save();
    req.flash('success', 'Added new task.')
    res.redirect('/todo')
}

module.exports.show = async (req, res) => {
    const { id } = req.params;
    const toDo = await ToDo.findById(id);
    res.render('todo/edit', { toDo })
}

module.exports.edit = async (req, res) => {
    const { id } = req.params;
    const toDo = await ToDo.findById(id);
    if (toDo.complete === false) {
        await toDo.updateOne({ complete: true })
    } else {
        await toDo.updateOne({ complete: false })
    }
    res.redirect(`/todo`)
}

module.exports.update = async (req, res) => {
    const { id } = req.params;
    await ToDo.findByIdAndUpdate(id, req.body, { runValidators: true });
    req.flash('success', 'Updated task.')
    res.redirect(`/todo`)
}

module.exports.complete = async (req, res) => {
    const { id } = req.params;
    const toDo = await ToDo.findById(id);
    if (toDo.complete === false) {
        await toDo.updateOne({ complete: true })
    } else {
        await toDo.updateOne({ complete: false })
    }
    res.redirect(`/todo`)
}

module.exports.destroy = async (req, res) => {
    const { id } = req.params;
    await ToDo.findByIdAndDelete(id)
    req.flash('success', 'Deleted task.')
    res.redirect('/todo')
}

module.exports.destroyAll = async (req, res) => {
    await ToDo.deleteMany({ author: req.user._id })
    req.flash('success', 'Deleted all tasks.')
    res.redirect('/todo')
}