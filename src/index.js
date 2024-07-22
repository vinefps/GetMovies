const express = require('express');
const movies = require("./routes/movieRoute");

const app = express();
const port = 3000;



app.use('/movies',movies)
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
