const express = require('express');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb+srv://renan:omnistack@cluster0-0aymf.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());

app.get('/', (request, response) => {
  return response.json({ message: 'Hello Imundo do carai' });
});

app.post('/', (request, response) => {
  console.log(request.body);
  return response.json({ message: 'Hello Imundo do carai' });
});

app.listen(3333);