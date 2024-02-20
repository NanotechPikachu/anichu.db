const fs = require('node:fs');
const db = __dirname.replace('functions', '') + 'db/anidb.json';
const { readJSON } = require('../utils/readJSON.js');

async function getAnime(anime) {
  const an = anime?.trim()?.toLowerCase();

  const data = await readJSON(db);
  
  for (const a of data) {
    if (a.title.toLowerCase() === an) {
      return a;
    };
  };
  return null;
};

module.exports = { getAnime };