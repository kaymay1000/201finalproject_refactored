'use strict';
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));

//Routes for requesting HTML resources
app.get('/', (req, res) => res.sendFile('/index.html', {root: './public'}));
app.get('/about', (req, res) => res.sendFile('/index.html', {root: './public'}));
app.get('/game', (req, res) => res.sendFile('/index.html', {root: './public'}));
app.get('*', (req, res) => res.sendFile('/404.html'), {root: './public'});

app.listen(PORT, function(){
  console.log(`Listening on PORT ${PORT}!`);
});
