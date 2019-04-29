const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const gut = require('./gut');
const yamlParser = require('js-yaml');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('combined'));
const port = 8080;

// app.set('views', __dirname + '/views');
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/views/builder.html'));
});

app.post('/form-submit', async (req, res) => {
  console.log(req.body);
  const files = gut(req.body);
  res.download(__dirname + '/concourse.zip');
  // res.download(__dirname + '/pipeline.yml', 'pipeline.yml');
  // res.download(__dirname + '/assemble.yml', 'assemble.yml');
  // res.json(req.body);
  // res.end();
});

app.listen(port, () => {
  console.log('App listening on port ', port);
});
