const anidb = require('./src/db/anidb.json');
const { getAnime } = require('./src/functions/animeGet.js');
const { searchAnime } = require('./src/functions/animeSearch.js');

module.exports = { 
  getAnime,
  searchAnime,
  anime: {
    get: getAnime,
    search: searchAnime
  }
};