/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars');

const { User } = require('./app/models');

const app = express();

const port = process.argv[2];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use('/static', express.static(`${__dirname}/static`));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => console.log(`Server is running at ${port}`));
