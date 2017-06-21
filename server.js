'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));

app.get('/', function(req, res) {
  console.log('i accessed the homepage');
  res.sendFile('./public/index.html');
});

app.listen(PORT, function() {
  console.log('currently listen on port: ', PORT);
});
