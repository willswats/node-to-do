const mongoose = require('mongoose');
const ToDo = require('./models/todo');

mongoose.connect('mongodb://localhost:27017/toDoApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Mongo connection open!')
    })
    .catch(err => {
        console.log('Mongo connection error!')
        console.log(err)
    });

const toDos = [
    {
        priority: 3,
        task: 'Buy groceries',
    },
    {
        priority: 1,
        task: 'Clean car',
    },
    {
        priority: 2,
        task: 'Scrub toilet',
    },
    {
        priority: 5,
        task: 'Go party',

    },
    {
        priority: 4,
        task: 'Eat salad',
    },
    {
        priority: 3,
        task: 'Buy groceries',
    },
    {
        priority: 1,
        task: 'Clean car',
    },
    {
        priority: 2,
        task: 'Scrub toilet',
    },
    {
        priority: 5,
        task: 'Go party',

    },
    {
        priority: 4,
        task: 'Eat salad',
    },
    {
        priority: 3,
        task: 'Buy groceries',
    },
    {
        priority: 1,
        task: 'Clean car',
    },
    {
        priority: 2,
        task: 'Scrub toilet',
    },
    {
        priority: 5,
        task: 'Go party',

    },
    {
        priority: 4,
        task: 'Eat salad',
    },
    {
        priority: 3,
        task: 'Buy groceries',
    },
    {
        priority: 1,
        task: 'Clean car',
    },
    {
        priority: 2,
        task: 'Scrub toilet',
    },
    {
        priority: 5,
        task: 'Go party',

    },
    {
        priority: 4,
        task: 'Eat salad',
    },
    {
        priority: 3,
        task: 'Buy groceries',
    },
    {
        priority: 1,
        task: 'Clean car',
    },
    {
        priority: 2,
        task: 'Scrub toilet',
    },
    {
        priority: 5,
        task: 'Go party',

    },
    {
        priority: 4,
        task: 'Eat salad',
    },
]

const seedDB = async () => {
    await ToDo.deleteMany({})
    await ToDo.insertMany(toDos)
}

seedDB().then(() => {
    mongoose.connection.close()
});