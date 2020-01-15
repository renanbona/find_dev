const { Router } = require('express');
const DevController = require('./controllers/DevController');

const routes = Router();

routes.get('/', (request, response) => {
  return response.json({ message: 'Get Imundo do carai' });
});

routes.post('/devs', DevController.store);

module.exports = routes;
