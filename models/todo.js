const mongoose = require('mongoose');

const toDoSchema = new mongoose.Schema({
    priority: {
        type: Number,
        required: true
    },
    task: {
        type: String,
        required: true
    }
})

const ToDo = mongoose.model('ToDo', toDoSchema)

module.exports = ToDo;