const db = __dirname.replace('functions', '') + 'db/anidb.json';
const { similarAnime } = require('../utils/similarAnime.js');

async function searchAnime(anime, ratio) {
  if (ratio < 0 || ratio > 1) return "Error: Ratio must be between 0 and 1!";

  const an = anime?.trim()?.toLowerCase();
  return similarAnime(an, db, ratio);
};

module.exports = { searchAnime };