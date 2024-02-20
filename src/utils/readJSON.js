const { decompress } = require('compress-json');
const fs = require('node:fs');

async function readJSON(db) {
  const anidb = JSON.parse(fs.readFileSync(db));
  const data = decompress(anidb);
  
  return data;
};

module.exports = { readJSON };