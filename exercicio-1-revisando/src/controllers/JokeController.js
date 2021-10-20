const JokeModel = require('../models/JokeModel');

const listJokes = async (_req, res) => {
  try {
    const joke = await JokeModel.getJokes();
    return res.status(200).render('JokeView.ejs', { joke });
  } catch (error) {
    console.error(error);
  }
};

module.exports = { listJokes };
