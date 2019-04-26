const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('combined'));
const port = 8080;

const gut = require('./gut');

// app.set('views', __dirname + '/views');
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/views/builder.html'));
});

app.post('/form-submit', async (req, res) => {
  //   gut(req.body);
  const name = req.body.teamName;
  console.log(name);
  // res.json(req.body);
});

app.listen(port, () => {
  console.log('App listening on port ', port);
});
