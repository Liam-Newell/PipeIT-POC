const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const gut = require('./gut');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('combined'));
const port = 8080;

// app.set('views', __dirname + '/views');
app.get('/', async (req, res) => {
  res.sendFile(path.join(__dirname + '/views/builder.html'));
});

app.post('/form-submit', async (req, res) => {
  console.log(req.body);
  const zip = await gut(req.body);
  res.contentType('zip');
  res.write(zip);
  res.end();
});

app.listen(port, () => {
  console.log('App listening on port ', port);
});
