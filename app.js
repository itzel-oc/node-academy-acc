const express = require('express');
const app = express();
const debug = require('debug')('app:app');

const bodyParser = require('body-parser');

// mocks
const { listOfPosts } = require('./mocks/posts');

// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

// req contains information from the client
// res is going to help us to answer the request
app.get('/posts', (req, res) => {
    debug('req body', req.body);
    debug('req query', req.query);
    res.json(listOfPosts);
});
  
  // POST method route
  app.post('/posts', function (req, res) {
    debug('req body', req.body);
    debug('req query', req.query);
    res.json(newPost);
  });


module.exports = app;