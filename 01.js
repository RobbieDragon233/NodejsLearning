var http = require('http');
var fs = require('fs');
var moment = require('moment');
var express = require('express');
var cors = require('koa2-cors');

var app = express();
// app.use(express.static('./static'));

// app.get('/', function(req, res){
// 	res._write("success!");
// 	fs.readFile('./static/index.html', function(err, data){
// 		if(err){
// 			return;
// 		}
// 		res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"});
// 		res.write("success!");
// 		res.end();
// 	})
// })

app.use(express.static('./static'));
app.get('/hh', function(req,res){
	fs.readdir(__dirname, function(err, files){
		var new_arr = {};
		var count = 0;

		for(var i = 0; i < files.length; i++){
			new_arr[i] = {};
			(function(i){
				fs.stat(files[i], function(err, datastat){
					count++;
					new_arr[i].name = files[i];
					new_arr[i].size = datastat.size;
					new_arr[i].time = moment(datastat.mtime).format('YYYY-MM-DD HH:mm:ss');
						
					if(datastat.isDirectory()) new_arr[i].type = 'd';						
					else new_arr[i].type = 'f';
					if(files.length == count){
						res.send(new_arr);
						res.end("success!");
					}
				})
			})(i)
		}
	})
});

app.listen(3000);