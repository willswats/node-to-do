const mongoose = require('mongoose');

const toDoSchema = new mongoose.Schema({
    priority: {
        type: Number,
        required: true,
        min: [1, 'Must be higher than 0']
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