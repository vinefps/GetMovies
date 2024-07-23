const express = require('express');
const movies = require("./routes/movieRoute");
const path = require('path');
const mustacheExpress = require('mustache-express');
require('dotenv').config(); // Terei acesso em .env em todo app

const app = express();
const port = 3000;
console.log('API_MOVIE_KEY:', process.env.API_MOVIE_KEY);

app.set('view engine', 'mustache');
app.set('views', path.join(__dirname, 'views'));
app.engine('mustache', mustacheExpress());

app.use(express.static(path.join(__dirname, 'public')));
app.use(movies);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
