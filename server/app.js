require('dotenv').config();
const path = require('path');
const ejs = require('ejs');

const express = require('express');
var db = require('./models');

const app = express();

const reportController = require('../controllers/report');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

db.sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Server is on port 3000');
  });
});

app.get('/', reportController.showGraph);

const User = db.User;
app.get('/users', function (req, res) {
  User.findAll().then(function (users) {
    res.json(users);
  });
});
app.post('/users', function (req, res) {
  User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: req.body.password,
  }).then(function (user) {
    res.json(user);
  });
});
