
var express = require('express');
var app = express();
app.get('/ping', (req, res) =>{
    res.send('hello ')
})

var server = app.listen(3000);

var express = require('express');
var app = express();
app.get('/ping', (req, res) =>{
    res.send('hello ')
})

var server = app.listen(3000);
