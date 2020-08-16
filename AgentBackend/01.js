var express = require('express');
var cors = require('cors');

var app = express();

//app.use(cors())
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.get('/addJson', function(req, res){
    console.log("success");
    res.end("success!")
});

app.listen(3000);