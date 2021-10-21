const axios = require('axios');

const ENDPOINT_DEFAULT = 'https://api.chucknorris.io/jokes/random';

module.exports = {
  async getCategories() {
    const ENDPOINT_URL = 'https://api.chucknorris.io/jokes/categories';
    try {
      const { data } = await axios.get(ENDPOINT_URL);
      return data;
    } catch (error) {
      console.error(error);
    }
  },
  async getJoke(category) {
    const ENDPOINT_URL = `https://api.chucknorris.io/jokes/random?category=${category}`;

    try {
      const {
        data: { value },
      } = await axios.get(ENDPOINT_URL);
      console.log(value);
      return value;
    } catch (error) {
      console.error(error);
    }
  },
  async getRandomJoke(category) {
    const ENDPOINT_URL = 'https://api.chucknorris.io/jokes/random';

    try {
      const {
        data: { value },
      } = await axios.get(ENDPOINT_URL);
      console.log(value);
      return value;
    } catch (error) {
      console.error(error);
    }
  },
};
