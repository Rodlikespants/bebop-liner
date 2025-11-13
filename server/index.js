import userRoutes from './src/routes/users-controller.js'
import melodicCellRoutes from './src/routes/cells-controller.js'
import boplineRoutes from './src/routes/boplines-controller.js'
import express from 'express';
import bodyParser from 'body-parser'

// const express = require('express');

const app = express();
const port = 8080;
// const port = 5000;

// console.log(app);

app.use(bodyParser.json());
app.use('/users', userRoutes);
app.use('/cells', melodicCellRoutes);
app.use('/boplines', boplineRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});