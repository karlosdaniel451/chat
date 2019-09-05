/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars');
const path = require('path');

const { User } = require('./app/models');

const app = express();

const port = process.argv[2];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'app/views'));
app.use(express.static(path.join(`${__dirname}app/static`)));

app.get('/', (req, res) => {
  res.render('login', { titleComplement: 'Entre ou cadastre-se' });
});

app.get('/cadastrar', (req, res) => {
  res.render('register', { titleComplement: 'Cadastar' });
});

app.post('/cadastrar', (req, res) => {});

app.listen(port, () => console.log(`Server is running at ${port}`));
