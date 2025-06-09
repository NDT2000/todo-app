const express = require('express');
const mongoose = require('mongoose');
const cors  = require('cors');
const todoRoutes = require('./routes/todoRoutes');

const app = express();
const port = 5000;

mongoose.connect('mongodb://localhost:27017/todoApp', {
    newUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

app.use(cors());
app.use(express.json());

app.use('/api/todos', todoRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});