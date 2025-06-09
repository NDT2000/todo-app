const express = require('express');
const router = express.Router();
const ToDo = require('../models/todo');

// Get all todos
router.get('/', async (req, res) => {
    const todos = await ToDo.find();
    res.json(todos);
});

// Create a new todo
router.post('/', async (req, res) => {
    const newTodo = new ToDo({
        title: req.body.title,
    });
    const savedTodo = await newTodo.save();
    res.json(savedTodo);
});

// Update a todo
router.put('/:id', async (req, res) => {
    const updated = await ToDo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
});

// Delete todo
router.delete('/:id', async (req, res) => {
    await ToDo.findByIdAndDelete(req.params.id);
    res.json({ message: 'Todo deleted' });
});

module.exports = router;