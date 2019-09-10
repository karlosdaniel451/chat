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

app.use('/static', express.static(`${__dirname}/app/static`));

app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'app/views'));

app.get('/', (req, res) => {
  res.render('login', { titleComplement: 'Entre ou cadastre-se' });
});

app.get('/cadastrar', (req, res) => {
  res.render('register', { titleComplement: 'Cadastar' });
});

app.post('/login', (req, res) => {
  res.render('user-not-found', { username: req.body.username, titleComplement: 'Erro' });
});

app.post('/register', (req, res) => {
  User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  })
    .then(() => res.send('<h1>Usuário criado com sucesso!</h1>'))
    .catch(error => res.send(`<h1>Erro: ${error}</h1>`));
});

app.listen(port, () => console.log(`Server is running at ${port}`));
