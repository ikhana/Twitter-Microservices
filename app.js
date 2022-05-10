require('dotenv').config();

const ejs = require('ejs');

const express = require('express');
const app = express();

const reportController = require('./controllers/report');

app.set('view engine', 'ejs');

app.get('/', reportController.showGraph);

app.listen(5000, () => {
  console.log('Server is on port 5000');
});
