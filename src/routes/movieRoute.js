const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', async (req, res) => {
    const apiUrl = 'https://api.themoviedb.org/3/movie/popular';

    try {
        const response = await axios.get(apiUrl, {
            params: {
                api_key: process.env.API_MOVIE_KEY
            }
        });

        res.render('index', { movies: response.data.results });
    } catch (error) {
        console.error('Error fetching data from TMDb:', error);
        res.status(500).send({ error: 'Error fetching data from TMDb' });
    }
});

router.get('/search', async (req, res) => {
    const query = req.query.query;

    try {
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
            params: {
                api_key: process.env.API_MOVIE_KEY,
                query: query
            }
        });
        res.render('results', { movies: response.data.results });
    } catch (error) {
        res.status(500).send({ error: 'Error fetching data from TMDb' });
    }
});

router.get('/movie/:id', async (req, res) => {
    const movieId = req.params.id;

    const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}`;

    try {
        const response = await axios.get(apiUrl, {
            params: {
                api_key: process.env.API_MOVIE_KEY
            }
        });
        res.json(response.data)
        console.log(process.env.API_MOVIE_KEY)
        res.render('details', { movies: response.data });
    } catch (error) {
        console.error('Error fetching data from TMDb:', error);
        res.status(500).send({ error: 'Error fetching data from TMDb' });
    }
});

module.exports = router;
