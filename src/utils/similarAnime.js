const fs = require('node:fs');
const { isSimilar } = require('./isSimilar.js');
const { readJSON } = require('./readJSON.js');

async function similarAnime(anime, db, ratio = 0.4) {
    let results = [];
    const anidb = await readJSON(db);
  
    for (let entry of anidb) {   
      if (isSimilar(entry.title?.toLowerCase(), anime) >= ratio) {
        results.push(entry);
      }
    }
    res = results.slice(0, 10);
    return res;
};

module.exports = { similarAnime };