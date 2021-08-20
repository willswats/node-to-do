const express = require('express')
const router = express.Router()
const catchAsync = require('../utils/catchAsync');
const { isLoggedIn, isAuthor, validateToDo } = require('../middleware.js')
const todo = require('../controllers/todo')

router.route('/')
    .get(isLoggedIn, catchAsync(todo.index))
    .post(isLoggedIn, validateToDo, catchAsync(todo.create))

router.route('/:id')
    .get(isLoggedIn, isAuthor, catchAsync(todo.show))
    .put(isLoggedIn, isAuthor, validateToDo, catchAsync(todo.edit))

router.put('/:id/complete', isLoggedIn, isAuthor, validateToDo, catchAsync(todo.complete))

router.delete('/', isLoggedIn, catchAsync(todo.destroyAll))

router.delete('/:id', isLoggedIn, isAuthor, catchAsync(todo.destroy))

module.exports = router;