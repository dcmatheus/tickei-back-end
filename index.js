const express = require('express');
const cors = require('cors');
const tasks = require('./routes/tasks');

require('dotenv').config();

const { PORT } = process.env;
const app = express();

app.use(cors());
app.use(express.json());

app.use('/tasks', tasks);

app.get('/', (_request, response) => {
  response.send();
});

app.listen(PORT, () => {
  console.log('Online', PORT);
});
