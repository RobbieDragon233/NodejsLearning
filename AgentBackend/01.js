var express = require('express');
var cors = require('cors');
var path = require("path");
var fs = require('fs');

var app = express();
const formidable = require('formidable');
const { randomBytes } = require('crypto');
const { fstat } = require('fs');

//app.use(cors())
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.get('/addJson', function(req, res){
    console.log("success");
    res.end([{"content-type":"multipart/form-data"},{"status" : "1"}]);
});

app.post('/addJson', (req, res, next) => {
    var form = new formidable.IncomingForm();

    //很重要的一步，不然直接存在C盘会出现跨盘拒绝
    form.uploadDir = path.normalize(__dirname + "/../tmpUp/");
 
    form.parse(req, (err, fields, files) => {
        if (err) {
            next(err);
            return;
        }
        var url = __dirname + "/../uploads/";
        var oldPath = files.file.path;
        var newPath = path.normalize(url + files.file.name);
        fs.rename(oldPath, newPath,(err) => {
            console.log(err);
        });
    });
});

app.get('/getJson', function(req, res){
    fs.readFile(path.normalize(__dirname + '/../uploads/demo.json'), (err, data) => {
        if (err) throw err;
        res.send(data);
      });
});

app.get('/initArea', function(req, res){
    fs.readFile(path.normalize(__dirname + '/../uploads/initArea.json'), (err, data) => {
        if (err) throw err;
        res.send(data);
      });
});

app.listen(3000);