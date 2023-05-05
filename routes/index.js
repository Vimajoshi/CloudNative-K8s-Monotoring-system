const express = require('express');
const router = express.Router();

const todosRoute = require('./todos');
const usersRoute = require('./users');
const checkRoute = require('./check');

module.exports = (params) => {

  router.get('/', (req, res) => {
    res.send('Home Page - Linked to docker container');
  });

  router.use('/todo', todosRoute(params.todoService));
  router.use('/user', usersRoute(params.userService));
  router.use('/check', checkRoute());

  return router;
};
