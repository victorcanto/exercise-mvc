const { JokeModel } = require('../models');

const listCategories = async (_req, res) => {
  try {
    const categories = await JokeModel.getCategories();
    return res.status(200).render('categories/index.ejs', { categories });
  } catch (error) {
    console.error(error);
  }
};

const redirectToCategories = (_req, res) => {
  res.redirect('/categories');
};

const listJokeByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const joke = await JokeModel.getJoke(category);
    return res.status(200).render('jokes/index.ejs', { joke });
  } catch (error) {
    console.error(error);
  }
};

const listJoke = async (_req, res) => {
  try {
    const joke = await JokeModel.getRandomJoke();
    return res.status(200).render('jokes/index.ejs', { joke });
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  listCategories,
  redirectToCategories,
  listJokeByCategory,
  listJoke,
};
