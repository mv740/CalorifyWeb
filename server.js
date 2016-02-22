/**
 * Created by michal on 2/21/2016.
 */

var http = require('http');
var port = process.env.PORT || 1337;
var express = require('express');
var app = express();
var path = require("path");

var rootDirectoryPath = {root: __dirname + '/../../'};

var Connection = require('tedious').Connection;
var config = {
    userName: 'calorifyAdmin',
    password: 'Zaq1xsw2cde3',
    server: 'calorifyserver.database.windows.net',
    // If you are on Microsoft Azure, you need this:
    options: {encrypt: true, database: 'calorifysql'}
};
var connection = new Connection(config);
connection.on('connect', function(err) {
// If no error, then good to proceed.
    console.log("Connected");
});


/* GET home page. */
app.get('/', function (req, res) {
    res.sendFile('index.html', {root: path.join(__dirname, '/public')});

});

app.get('/test', function (req, res) {

    var name = "hello world";
    var calories = 10;

    var Request = require("tedious").Request,
        request = new Request("INSERT INTO foods (name,calorie) VALUES("+name+","+calories+")", cbQuery);
    connection.execSql(request);
    
    res.end();
});



app.post('/persistFood', function (req, res) {
    var foodName = req.param("foodName");
    var cals = req.param("cals");
    console.log(
        {
            "data1": foodName,
            "data2": cals
        });
    res.end();
});

http.createServer(app).listen(port, function () {
    console.log('HTTPS Server Started!');
});