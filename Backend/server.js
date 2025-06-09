const express = require('express');
const mongoose = require('mongoose');
const cors  = require('cors');
const todoRoutes = require('./routes/todos');

const app = express();
const port = 5000;

mongoose.connect('mongodb://127.0.0.1:27017/todoapp')
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

app.use(cors());
app.use(express.json());

app.use('/api/todos', todoRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});