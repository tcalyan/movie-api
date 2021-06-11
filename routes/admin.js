const { filter } = require('async');
const express = require('express');
const controller = require('../controller/movies.controller');

const router = express.Router();

router.get('/', async (req, res, next) => {
  res.json({Title : "MainPage"});
});

router.get('/movies', async (req, res, next) => {
  const filters = req.query;
  const movies = await controller.getAllMovies(filters);
  if(movies===null)
  {
    res.json({Comment: "No comments about movie"})
  }
  else
  {
    res.json(movies);
  }
  
});

router.post('/movies', async (req, res, next) => {
  const addingMovie = await controller.createMovie(req.body.filmName);
  res.json(addingMovie);

});

router.get('/comments', async (req, res, next) => {
  const moviesComments = await controller.getCommentByMovieId(req.query.id)
  res.json(moviesComments)
});

router.post('/comments',async (req, res, next) =>
{
  const comment = await controller.addCommentByMovieId(req.body);
  const movie = await controller.getMovieById(req.body.imdbID);
  res.json(movie);
});

module.exports = router;
