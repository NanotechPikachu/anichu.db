const fs = require('node:fs');
const { isSimilar } = require('./isSimilar.js');

function similarAnime(anime, db, ratio = 0.4) {
    let results = [];
    const anidb = JSON.parse(fs.readFileSync(db));
  
    for (let entry of anidb) {   
      if (isSimilar(entry.title?.toLowerCase(), anime) > ratio) {
        results.push(entry);
      }
    }
    res = results.slice(0, 10);
    return res;
};

module.exports = { similarAnime };