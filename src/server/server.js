const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');

//const baseDir = path.join(fs.realpathSync('./'), process.argv[2] || 'build');

const app = express();
//app.use(express.static(baseDir));


require('./server-captcha')(app);
require('./server-api')(app);

//app.get('/', function (req, res) {
//  res.sendFile(path.join(baseDir, 'index.html'));
//});

app.listen(process.env.PORT || 8080);

console.log('server: running');
