/**
 * Created by michal on 2/21/2016.
 */

var http = require('http');
var port = process.env.PORT || 1337;
var express = require('express');
var app = express();
var path = require("path");

var rootDirectoryPath = {root: __dirname + '/../../'};


/* GET home page. */
app.get('/', function (req, res) {
    res.sendFile('index.html', { root: path.join(__dirname, '/public') });

});


app.get('/hello', function (req, res) {
    res.send({"hello":"world"})
});

http.createServer(app).listen(port, function () {
    console.log('HTTPS Server Started!');
});