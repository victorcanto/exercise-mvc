const axios = require('axios');

const ENDPOINT_URL =
  'https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist&type=single';

module.exports = {
  async getJokes() {
    try {
      const {
        data: { joke },
      } = await axios.get(ENDPOINT_URL);
      console.log(joke);
      return joke;
    } catch (error) {
      console.error(error);
    }
  },
};
