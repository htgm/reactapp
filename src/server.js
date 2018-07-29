const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const captcha = require('svg-captcha');

const dir = fs.realpathSync('./');

const app = express();
app.use(express.static(path.join(dir, 'build')));

app.get('/captcha', function (req, res) {
  var cap = captcha.create();
  req.session.captcha = cap.text;
  res.type('svg');
  res.status(200).send(cap.data);
});

app.get('/', function (req, res) {
  res.sendFile(path.join(dir, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080);

console.log('server: running');
