/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');

const { User } = require('./app/models');

const app = express();

const port = process.argv[2];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => console.log(`Server is running at ${port}`));
