const express = require('express');
require('dotenv').config();

const { PORT } = process.env;
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log('Online', PORT);
});
