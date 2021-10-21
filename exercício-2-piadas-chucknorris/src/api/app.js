const express = require('express');
const { JokeController } = require('../controllers');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', 'src/views');

app.get('/', JokeController.redirectToCategories);
app.get('/categories', JokeController.listCategories);
app.get('/jokes', JokeController.listJoke);
app.get('/jokes/:category', JokeController.listJokeByCategory);

module.exports = app;
