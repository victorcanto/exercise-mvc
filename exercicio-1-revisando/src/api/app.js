const express = require('express');
const { JokeController } = require('../controllers');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', './src/views');

app.get('/', JokeController.listJokes);

module.exports = app;
