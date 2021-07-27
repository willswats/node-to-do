const mongoose = require('mongoose');

const toDoSchema = new mongoose.Schema({
    priority: {
        type: Number,
        required: true
    },
    task: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        default: false,
        required: true
    }
})

const ToDo = mongoose.model('ToDo', toDoSchema)

module.exports = ToDo;