const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

 const app = express();
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(express.static(process.cw + './client/public'));

if (process.env.NODE_ENV == 'production') {
  console.log('This is on production');
} else {
  mongoose.connect('mongodb://localhost/nyt-react');
}

const db = mongoose.connection;

db.on('error', function (err) {
  console.log('Mongoose Error: ', err);
});

db.once('open', function () {
  console.log('Mongoose connetion successfull.');
});

var Article = require('./models/articles.js');

var router = require('./controllers/controller.js');

app.use('/', router);

var port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log('Running on port: ' + port);
});
