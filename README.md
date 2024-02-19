<div>
<h2 align="center">
  AniChu.DB
</h2>
</div>
<div>
<h5 align="center">AniChu.DB - A DataBase for anime, manga, etc fans!</h5>
</div>

<hr />

<u><h3>Installation</h3></u>

```bash
npm install anichu.db
```

<hr />

<u><h3>Usage</h3></u>

```js
const { getAnime, searchAnime } = require("anichu.db");

console.log(getAnime("Sword art online"));

console.log(searchAnime("Solo leveling"));
```

> Refer [DOCS]() to get the exact parameter and usage of functions as well as additional information.

<hr />

<u><h3>Sources</h3></u>

[MAL - My Anime List](https://myanimelist.net/) and [JIKAN API](https://docs.api.jikan.moe/)

<hr /><br />
<h4>Note:</h4>

> The animes in the DB are taken from <b>MAL</b> and there are around <b>26k</b> anime in the JSON. Still, some anime maybe missing. If you encounter any such anime, please open an issue or DM me @nanotechpikachu in discord.
<br />

I do not validate the authenticity of any data in the DB. All are as per my API source and I am no way responsible for any fake or twisted information. Though, you can tell me if you find any false info.