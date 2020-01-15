const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

routes.get('/', (request, response) => {
  return response.json({ message: 'Get Imundo do carai' });
});

routes.get('/search', SearchController.index);
routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

module.exports = routes;
