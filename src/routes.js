const { Router } = require('express');
const axios = require('axios');

const routes = Router();

routes.get('/', (request, response) => {
  return response.json({ message: 'Get Imundo do carai' });
});

routes.post('/devs', async (request, response) => {
  const { github_username } = request.body;

  const apiResponse =  await axios.get(`https://api.github.com/users/${github_username}`);

  console.log(apiResponse.data);

  return response.json({ message: 'Post Imundo do carai' });
});

module.exports = routes;
