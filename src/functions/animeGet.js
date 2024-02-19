const fs = require('node:fs');
const db = __dirname.replace('functions', '') + 'db/anidb.json';

async function getAnime(anime) {
  const an = anime?.trim()?.toLowerCase();

  const anidb = fs.readFileSync(db);
  const data = JSON.parse(anidb);
  
  for (const a of data) {
    if (a.title.toLowerCase() === an) {
      return a;
    };
  };
  return null;
};

module.exports = { getAnime };