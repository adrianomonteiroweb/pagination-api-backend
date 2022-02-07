const routes = require('express').Router();

const pagesMidleware = require('./src/middlewares/pagesMidleware');

routes.post('/pagination', pagesMidleware);

module.exports = routes;
