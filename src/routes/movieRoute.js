const express = require('express');
const axios = require('axios');
const router = express.Router();
require('dotenv').config();

// Exemplo de rota
app.get('/', async (req, res) => {
    const query = req.query.query;
    
    if (!query) {
        return res.status(400).send({ error: 'Query parameter is required' });
    }

    try {
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
            params: {
                api_key: process.env.API_MOVIE_KEY,
                query: query
            },
            
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).send({ error: 'Error fetching data from TMDb' });
    }
});

module.exports = router;


